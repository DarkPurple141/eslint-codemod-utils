import { ESLintUtils } from '@typescript-eslint/utils'
import {
  AST_NODE_TYPES,
  isNodeOfType,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxOpeningElement,
  jsxText,
  Loose,
  TSESTree,
} from 'eslint-codemod-utils'
import { findModal } from './finder'

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

/**
 * Build the children of the new `<ModalTitle>` element from the original
 * `title` attribute value.
 *
 *  - String literal → render as `JSXText` directly.
 *  - Other expression → wrap in a `JSXExpressionContainer`.
 *  - Empty / spread / fragment-only values are dropped.
 */
function renderTitleChildren(
  value: TSESTree.JSXAttribute['value']
): Loose<TSESTree.JSXChild>[] {
  if (!value) {
    return []
  }

  if (
    isNodeOfType(value, AST_NODE_TYPES.Literal) &&
    typeof value.value === 'string'
  ) {
    return [jsxText({ value: value.value, raw: value.raw })]
  }

  if (isNodeOfType(value, AST_NODE_TYPES.JSXExpressionContainer)) {
    return [value]
  }

  // `JSXEmptyExpression` / `JSXSpreadChild` don't translate cleanly to a
  // child for the new element — drop them.
  if (
    isNodeOfType(value, AST_NODE_TYPES.JSXEmptyExpression) ||
    isNodeOfType(value, AST_NODE_TYPES.JSXSpreadChild)
  ) {
    return []
  }

  // Remaining cases are non-string literals (BigInt/Number/Boolean/Null/RegExp)
  // — wrap them in an expression container.
  return [jsxExpressionContainer({ expression: value })]
}

const rule = createRule({
  name: '03-jsx-ecu',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Update to a compositional API',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
    messages: {
      compose: 'This Modal needs to use the compositional ModalTitle API.',
    },
  },
  create(context) {
    return {
      JSXElement(node) {
        if (!findModal(node)) {
          return
        }

        context.report({
          node,
          messageId: 'compose',
          fix(fixer) {
            const jsxId = jsxIdentifier('ModalTitle')
            const title = node.openingElement.attributes.find(
              (inner): inner is TSESTree.JSXAttribute =>
                isNodeOfType(inner, AST_NODE_TYPES.JSXAttribute) &&
                isNodeOfType(inner.name, AST_NODE_TYPES.JSXIdentifier) &&
                inner.name.name === 'title'
            )
            return fixer.replaceText(
              node,
              `${jsxElement({
                ...node,
                openingElement: jsxOpeningElement({
                  ...node.openingElement,
                  attributes: node.openingElement.attributes.filter(
                    (n) =>
                      isNodeOfType(n, AST_NODE_TYPES.JSXAttribute) &&
                      isNodeOfType(n.name, AST_NODE_TYPES.JSXIdentifier) &&
                      n.name.name !== 'title'
                  ),
                  selfClosing: false,
                }),
                closingElement: jsxClosingElement({
                  name: node.openingElement.name,
                }),
                children: [
                  jsxElement({
                    openingElement: jsxOpeningElement({
                      name: jsxId,
                      selfClosing: false,
                      attributes: [],
                    }),
                    closingElement: jsxClosingElement({ name: jsxId }),
                    children: renderTitleChildren(title?.value ?? null),
                  }),
                  ...node.children,
                ],
              })}`
            )
          },
        })
      },
    }
  },
})

export default rule
