import { Rule } from 'eslint'
import {
  AST_NODE_TYPES,
  ESLintNode,
  isNodeOfType,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxOpeningElement,
  jsxText,
  TSESTree,
} from 'eslint-codemod-utils'
import { findModal } from './finder'

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Update to a compositional API',
    },
    fixable: 'code',
  },
  create(context) {
    return {
      JSXElement(node: ESLintNode) {
        if (!isNodeOfType(node, AST_NODE_TYPES.JSXElement)) {
          return
        }
        if (findModal(node)) {
          context.report({
            node,
            message: 'error',
            fix(fixer) {
              const jsxId = jsxIdentifier('ModalTitle')
              const title = node.openingElement.attributes.find(
                (inner): inner is TSESTree.JSXAttribute =>
                  isNodeOfType(inner, AST_NODE_TYPES.JSXAttribute) &&
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
                        n.name.name !== 'title'
                    ),
                    selfClosing: false,
                  }),
                  closingElement: jsxClosingElement({ ...node.openingElement }),
                  children: [
                    jsxElement({
                      openingElement: jsxOpeningElement({
                        name: jsxId,
                        selfClosing: false,
                        attributes: [],
                      }),
                      closingElement: jsxClosingElement({ name: jsxId }),
                      children: [
                        title?.value?.type === 'Literal'
                          ? jsxText(title.value)
                          : jsxExpressionContainer({
                              expression: title?.value,
                            }),
                      ],
                    }),
                    ...node.children,
                  ],
                })}`
              )
            },
          })
        }
      },
    }
  },
}

export default rule
