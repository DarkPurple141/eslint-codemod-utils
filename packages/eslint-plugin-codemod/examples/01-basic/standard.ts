import { Rule } from 'eslint'
import { findSemi } from './finder'

const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Require or disallow semicolons instead of ASI',
      recommended: false,
      url: 'https://eslint.org/docs/rules/semi',
    },
    fixable: 'code',
  },
  create(context) {
    const source = context.getSourceCode()
    return {
      Literal(node) {
        if (!findSemi(node, source))
          context.report({
            node,
            message: 'error',
            fix: (fixer) => {
              return fixer.insertTextAfter(node, ';')
            },
          })
      },
    }
  },
}

export default rule
