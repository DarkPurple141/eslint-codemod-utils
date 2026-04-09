import { ESLintUtils } from '@typescript-eslint/utils'
import { findModal } from './finder'

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

const rule = createRule({
  name: '03-jsx-standard',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Update to a compositional API',
      recommended: 'error',
    },
    schema: [],
    messages: {
      compose: 'This Modal needs to use the compositional ModalTitle API.',
    },
  },
  create(context) {
    return {
      JSXElement(node) {
        if (findModal(node)) {
          context.report({
            node,
            messageId: 'compose',
          })
        }
      },
    }
  },
})

export default rule
