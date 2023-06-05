import { Rule } from 'eslint'
import { isNodeOfType } from 'eslint-codemod-utils'
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
      JSXElement(node: Rule.Node) {
        if (!node) {
          return
        }

        if (!isNodeOfType(node, 'JSXElement')) {
          return
        }
        if (findModal(node)) {
          context.report({
            node,
            message: 'error',
          })
        }
      },
    }
  },
}

export default rule
