import { Rule } from 'eslint'
import {
  EslintNode,
  isNodeOfType,
  JSXAttribute,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxOpeningElement,
  jsxText,
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
      JSXElement(node: EslintNode) {
        if (!isNodeOfType(node, 'JSXElement')) {
          return
        }
        if (findModal(node)) {
          context.report({
            // @ts-expect-error
            node,
            message: 'error',
            fix(fixer) {
              const jsxId = jsxIdentifier('ModalTitle')
              const title = node.openingElement.attributes.find(
                (inner): inner is JSXAttribute =>
                  isNodeOfType(inner, 'JSXAttribute') &&
                  inner.name.name === 'title'
              )
              return fixer.replaceText(
                // @ts-expect-error
                node,
                `${jsxElement({
                  ...node,
                  openingElement: jsxOpeningElement({
                    ...node.openingElement,
                    attributes: node.openingElement.attributes.filter(
                      (n) =>
                        isNodeOfType(n, 'JSXAttribute') &&
                        n.name.name !== 'title'
                    ),
                    selfClosing: false,
                  }),
                  closingElement: jsxClosingElement({ ...node.openingElement }),
                  children: [
                    jsxElement({
                      openingElement: jsxOpeningElement({ name: jsxId }),
                      closingElement: jsxClosingElement({ name: jsxId }),
                      children: [
                        title?.value?.type === 'Literal'
                          ? // @ts-expect-error
                            jsxText(title.value)
                          : jsxExpressionContainer({
                              // @ts-expect-error
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
