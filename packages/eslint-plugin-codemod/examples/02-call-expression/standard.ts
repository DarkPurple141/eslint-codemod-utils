import { Rule } from 'eslint'
import { findF } from './finder'
import { isNodeOfType } from 'eslint-codemod-utils'

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Update a fn paramater set',
    },
    fixable: 'code',
  },
  create(context) {
    return {
      CallExpression(node) {
        if (findF(node)) {
          context.report({
            node,
            message: 'error',
            fix(fixer) {
              const fnName =
                isNodeOfType(node.callee, 'Identifier') && node.callee.name
              return fixer.replaceText(
                node,
                `${fnName}({ ${
                  // @ts-expect-error
                  node.arguments[0] ? `first: ${node.arguments[0].name}` : ''
                }${
                  node.arguments[1]
                    ? // @ts-expect-error
                      `, second: ${node.arguments[1].name || 'unknown'}`
                    : ''
                } })`
              )
            },
          })
        }
      },
    }
  },
}

export default rule
