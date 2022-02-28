import { Rule } from 'eslint'
import { JSXOpeningElement } from 'estree-jsx'
import {
  jsxAttribute,
  jsxIdentifier,
  jsxOpeningElement,
} from 'eslint-codemod-utils'

const TO_RENAME = 'open'

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Dummy rule that changes a prop name in a dummy component using ast-helpers',
      recommended: true,
    },
    fixable: 'code',
  },
  create(context) {
    return {
      JSXOpeningElement(_node: any) {
        const node: JSXOpeningElement = _node

        if (
          !(node.name.type === 'JSXIdentifier' && node.name.name === 'AKModal')
        ) {
          return
        }

        const openAttribute = node.attributes.find((attr) => {
          if (attr.type === 'JSXAttribute') {
            return attr.name.name === TO_RENAME
          }

          return false
        })

        if (!openAttribute) {
          return
        }

        // Error cases after this point
        context.report({
          node: node as any,
          message: 'error',
          fix(fixer) {
            const fixed = String(
              jsxOpeningElement({
                name: node.name,
                selfClosing: node.selfClosing,
                attributes: node.attributes.map((attr) => {
                  if (
                    attr.type === 'JSXAttribute' &&
                    attr.name.name === 'open'
                  ) {
                    const internal = jsxAttribute({
                      ...attr,
                      name: jsxIdentifier({
                        ...attr.name,
                        name: 'isOpen',
                      }),
                    })
                    return internal
                  }

                  return attr
                }),
              })
            )

            // @ts-ignore
            return fixer.replaceText(node, fixed)
          },
        })
      },
    }
  },
}

export default rule
