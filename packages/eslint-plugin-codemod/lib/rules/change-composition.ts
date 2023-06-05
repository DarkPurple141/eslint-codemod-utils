import type { Rule } from 'eslint'
import {
  identifier,
  importDeclaration,
  ImportDeclaration,
  ImportDefaultSpecifier,
  importSpecifier,
  isNodeOfType,
  JSXAttribute,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxOpeningElement,
  jsxText,
  whiteSpace,
} from 'eslint-codemod-utils'

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Dummy rule that changes a component prop to a composed prop in a dummy component using ast-helpers',
      recommended: true,
    },
    fixable: 'code',
  },
  create(context) {
    let importNode: ImportDeclaration | null = null

    return {
      ImportDeclaration(node) {
        if (!node) return

        if (node.source.value === '@atlaskit/modal-dialog') {
          importNode = node
        }
      },
      JSXElement(node: Rule.Node) {
        if (!importNode) {
          return
        }

        if (!node) {
          return
        }

        if (!isNodeOfType(node, 'JSXElement')) {
          return
        }

        const { openingElement } = node

        if (!isNodeOfType(openingElement.name, 'JSXIdentifier')) {
          return
        }

        const localDefaultImport = importNode.specifiers.find(
          (spec): spec is ImportDefaultSpecifier =>
            spec.type === 'ImportDefaultSpecifier'
        )

        if (openingElement.name.name !== localDefaultImport?.local.name) {
          return
        }

        // From here we're dealing with a JSX element of the right type
        const headingAttribute = openingElement.attributes.find(
          (attr): attr is JSXAttribute =>
            isNodeOfType(attr, 'JSXAttribute') && attr?.name?.name === 'heading'
        )

        if (!headingAttribute) {
          return
        }

        context.report({
          node,
          message: 'error',
          fix(fixer) {
            const modalHeaderIdentifer = jsxIdentifier('ModalHeader')
            const fixed =
              '(\n' +
              ''.padStart(node.loc?.start?.column || 0, ' ') +
              String(
                jsxElement({
                  range: node.range,
                  loc: node.loc,
                  openingElement: jsxOpeningElement({
                    ...node?.openingElement,
                    selfClosing: false,
                    attributes: node.openingElement.attributes.filter(
                      (att) =>
                        !(
                          att.type === 'JSXAttribute' &&
                          att.name.name === 'heading'
                        )
                    ),
                  }),
                  closingElement: jsxClosingElement(
                    node?.closingElement || node.openingElement
                  ),
                  children: (node.children || []).concat(
                    jsxElement({
                      // @ts-expect-error
                      loc: { start: { column: node.loc.start.column + 2 } },
                      openingElement: jsxOpeningElement({
                        name: modalHeaderIdentifer,
                        selfClosing: false,
                        attributes: [],
                      }),
                      closingElement: jsxClosingElement({
                        name: modalHeaderIdentifer,
                      }),
                      children: [
                        // JSXText case
                        headingAttribute?.value?.type === 'Literal' &&
                        typeof headingAttribute.value.value === 'string'
                          ? // @ts-expect-error
                            jsxText(headingAttribute.value)
                          : headingAttribute?.value?.type === 'JSXElement'
                          ? jsxElement(headingAttribute.value)
                          : jsxExpressionContainer({
                              // @ts-expect-error
                              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                              expression: headingAttribute.value!,
                            }),
                      ],
                    })
                  ),
                })
              ) +
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              `\n${whiteSpace(node.loc!)})`

            const fixes = [fixer.replaceText(node, fixed)]

            // should never occurr
            if (!importNode) {
              return fixes
            }

            if (
              !importNode.specifiers.some(
                (spec) =>
                  spec.type === 'ImportSpecifier' &&
                  spec.imported.name === 'ModalHeader'
              )
            ) {
              const namedImport = importSpecifier({
                local: identifier('ModalHeader'),
                imported: identifier('ModalHeader'),
              })

              fixes.push(
                fixer.replaceText(
                  importNode,
                  String(
                    importDeclaration({
                      ...importNode,
                      specifiers: (importNode.specifiers || []).concat(
                        namedImport
                      ),
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
}

export default rule
