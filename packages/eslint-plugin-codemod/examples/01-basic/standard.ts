import { ESLintUtils } from '@typescript-eslint/utils'
import { findSemi } from './finder'

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

const rule = createRule({
  name: '01-basic-standard',
  defaultOptions: [],
  meta: {
    type: 'layout',
    docs: {
      description: 'Require or disallow semicolons instead of ASI',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
    messages: {
      missingSemi: 'Missing semicolon.',
    },
  },
  create(context) {
    const source = context.getSourceCode()
    return {
      Literal(node) {
        if (!findSemi(node, source))
          context.report({
            node,
            messageId: 'missingSemi',
            fix: (fixer) => {
              return fixer.insertTextAfter(node, ';')
            },
          })
      },
    }
  },
})

export default rule
