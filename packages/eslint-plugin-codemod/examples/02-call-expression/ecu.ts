import { ESLintUtils } from '@typescript-eslint/utils'
import {
  AST_NODE_TYPES,
  callExpression,
  identifier,
  isNodeOfType,
  Loose,
  objectExpression,
  property,
  TSESTree,
} from 'eslint-codemod-utils'
import { findF } from './finder'

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

const rule = createRule({
  name: 'update-fn-param-set-ecu',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Update a fn parameter set',
      recommended: 'error',
    },
    fixable: 'code',
    messages: {
      updateParams: 'This call needs to use the new parameter shape.',
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (findF(node)) {
          context.report({
            node,
            messageId: 'updateParams',
            fix(fixer) {
              const thing = callExpression({
                ...node,
                optional: false,
                arguments: [
                  objectExpression({
                    properties: ['first', 'second']
                      .map((id, idx) => {
                        const arg = node.arguments[idx]
                        if (!arg) {
                          return null
                        }
                        // `CallExpression.arguments` is
                        // `(Expression | SpreadElement)[]`. `SpreadElement`
                        // isn't a valid RHS for an object `Property` value,
                        // so skip those and pass Expressions through.
                        if (isNodeOfType(arg, AST_NODE_TYPES.SpreadElement)) {
                          return null
                        }
                        return property({
                          key: identifier(id),
                          value: arg,
                        })
                      })
                      .filter(
                        (prop): prop is Loose<TSESTree.Property> =>
                          prop !== null
                      ),
                  }),
                ],
              })
              return fixer.replaceText(node, `${thing}`)
            },
          })
        }
      },
    }
  },
})

export default rule
