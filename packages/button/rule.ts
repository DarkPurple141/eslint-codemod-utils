import type { Rule } from 'eslint'

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
  },
  create(context) {
    return {
      Literal(node) {
        context.report({
          node,
          message: 'some-error',
        })
      },
    }
  },
}

export default rule
