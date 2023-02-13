import { Rule } from 'eslint'
import { findF } from './finder'

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
              const fnName = node.callee.name
              return fixer.replaceText(
                node,
                `${fnName}({ ${
                  node.arguments[0] ? `first: ${node.arguments[0].name}` : ''
                }${
                  node.arguments[1]
                    ? `, second: ${node.arguments[1].name || 'unknown'}`
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
