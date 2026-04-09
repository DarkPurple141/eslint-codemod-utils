import { ESLintUtils } from '@typescript-eslint/utils'
import {
  AST_NODE_TYPES,
  identifier,
  importDeclaration,
  importSpecifier,
  isNodeOfType,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxOpeningElement,
  jsxText,
  Loose,
  TSESTree,
  whiteSpace,
} from 'eslint-codemod-utils'

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

/**
 * Normalise the `heading` prop value to a valid JSX child.
 *
 * `JSXAttribute.value` is `Literal | JSXExpression | null` where
 * `JSXExpression = JSXEmptyExpression | JSXExpressionContainer | JSXSpreadChild`.
 * The composition fix needs to insert it as a JSX child — a narrower set of
 * types — so we translate each variant explicitly:
 *
 *  - string literal  → `JSXText`
 *  - JSXElement      → the element itself (passed through)
 *  - other expression → wrap in `JSXExpressionContainer`
 */
function renderHeadingChild(
  value: TSESTree.JSXAttribute['value']
): Loose<TSESTree.JSXChild>[] {
  if (!value) {
    return []
  }

  if (
    isNodeOfType(value, AST_NODE_TYPES.Literal) &&
    typeof value.value === 'string'
  ) {
    return [jsxText({ value: String(value.value), raw: value.raw })]
  }

  if (isNodeOfType(value, AST_NODE_TYPES.JSXElement)) {
    return [jsxElement(value)]
  }

  // A `JSXExpressionContainer` can be reused as-is (it's already a JSX child).
  if (isNodeOfType(value, AST_NODE_TYPES.JSXExpressionContainer)) {
    return [value]
  }

  // Non-string literals (BigInt/Boolean/Null/Number/RegExp) are valid
  // `Expression`s and can be wrapped into an expression container.
  if (isNodeOfType(value, AST_NODE_TYPES.Literal)) {
    return [jsxExpressionContainer({ expression: value })]
  }

  // `JSXEmptyExpression`/`JSXSpreadChild` don't translate into a sensible JSX
  // child in this rewrite — skip them.
  return []
}

const rule = createRule({
  name: 'jsx/change-composition',
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Dummy rule that changes a component prop to a composed prop in a dummy component using ast-helpers',
      recommended: 'error',
    },
    fixable: 'code',
    messages: {
      changeComposition:
        'A composition rewrite is required for <{{ local }} />.',
    },
    schema: [],
  },
  create(context) {
    let importNode: TSESTree.ImportDeclaration | null = null

    return {
      ImportDeclaration(node) {
        if (node.source.value === '@atlaskit/modal-dialog') {
          importNode = node
        }
      },
      JSXElement(node) {
        if (!importNode) {
          return
        }

        const { openingElement } = node

        if (!isNodeOfType(openingElement.name, AST_NODE_TYPES.JSXIdentifier)) {
          return
        }

        const localDefaultImport = importNode.specifiers.find(
          (spec): spec is TSESTree.ImportDefaultSpecifier =>
            isNodeOfType(spec, AST_NODE_TYPES.ImportDefaultSpecifier)
        )

        if (openingElement.name.name !== localDefaultImport?.local.name) {
          return
        }

        // From here we're dealing with a JSX element of the right type
        const headingAttribute = openingElement.attributes.find(
          (attr): attr is TSESTree.JSXAttribute =>
            isNodeOfType(attr, AST_NODE_TYPES.JSXAttribute) &&
            isNodeOfType(attr.name, AST_NODE_TYPES.JSXIdentifier) &&
            attr.name.name === 'heading'
        )

        if (!headingAttribute) {
          return
        }

        context.report({
          node,
          messageId: 'changeComposition',
          data: { local: localDefaultImport?.local.name ?? '' },
          fix(fixer) {
            const modalHeaderIdentifer = jsxIdentifier('ModalHeader')
            const headingValue = headingAttribute.value
            const fixed =
              '(\n' +
              ''.padStart(node.loc?.start?.column || 0, ' ') +
              String(
                jsxElement({
                  range: node.range,
                  loc: node.loc,
                  openingElement: jsxOpeningElement({
                    ...openingElement,
                    selfClosing: false,
                    attributes: openingElement.attributes.filter(
                      (att) =>
                        !(
                          isNodeOfType(att, AST_NODE_TYPES.JSXAttribute) &&
                          isNodeOfType(
                            att.name,
                            AST_NODE_TYPES.JSXIdentifier
                          ) &&
                          att.name.name === 'heading'
                        )
                    ),
                  }),
                  closingElement: node.closingElement
                    ? jsxClosingElement(node.closingElement)
                    : jsxClosingElement({ name: openingElement.name }),
                  children: [
                    ...(node.children || []),
                    jsxElement({
                      // Synthesise a `loc` whose column is offset from the
                      // parent `<Modal>` by two spaces, so that `whiteSpace`
                      // inside `jsxElement.toString()` indents the nested
                      // `<ModalHeader>` one level deeper than its parent.
                      // Only the start column is consulted at render time.
                      loc: {
                        start: {
                          column: (node.loc?.start?.column ?? 0) + 2,
                          line: 0,
                        },
                        end: { column: 0, line: 0 },
                      },
                      openingElement: jsxOpeningElement({
                        name: modalHeaderIdentifer,
                        selfClosing: false,
                        attributes: [],
                      }),
                      closingElement: jsxClosingElement({
                        name: modalHeaderIdentifer,
                      }),
                      children: renderHeadingChild(headingValue),
                    }),
                  ],
                })
              ) +
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              `\n${whiteSpace(node.loc!)})`

            const fixes = [fixer.replaceText(node, fixed)]

            // should never occur
            if (!importNode) {
              return fixes
            }

            if (
              !importNode.specifiers.some(
                (spec) =>
                  isNodeOfType(spec, AST_NODE_TYPES.ImportSpecifier) &&
                  isNodeOfType(spec.imported, AST_NODE_TYPES.Identifier) &&
                  spec.imported.name === 'ModalHeader'
              )
            ) {
              const namedImport = importSpecifier({
                local: identifier('ModalHeader'),
                imported: identifier('ModalHeader'),
                importKind: 'value',
              })

              fixes.push(
                fixer.replaceText(
                  importNode,
                  String(
                    importDeclaration({
                      ...importNode,
                      specifiers: [...importNode.specifiers, namedImport],
                    })
                  )
                )
              )
              fixes.push(
                fixer.insertTextBefore(
                  importNode,
                  `// The import "ModalHeader" has been added by codemod\n`
                )
              )
            }

            return fixes
          },
        })
      },
    }
  },
})

export default rule
