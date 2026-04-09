import { ESLintUtils } from '@typescript-eslint/utils'
import { findF } from './finder'
import { AST_NODE_TYPES, isNodeOfType } from 'eslint-codemod-utils'

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

/**
 * Return the `name` of an argument when it's an `Identifier`, otherwise
 * `undefined`. `CallExpression.arguments` is `(Expression | SpreadElement)[]`
 * — only some variants carry a `.name` field, so narrow explicitly before
 * reaching for it.
 */
function identifierName(arg: unknown): string | undefined {
  if (isNodeOfType(arg, AST_NODE_TYPES.Identifier)) {
    return arg.name
  }
  return undefined
}

const rule = createRule({
  name: 'update-fn-param-set',
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
              const fnName =
                isNodeOfType(node.callee, AST_NODE_TYPES.Identifier) &&
                node.callee.name
              const firstName = identifierName(node.arguments[0])
              const secondName = identifierName(node.arguments[1])
              return fixer.replaceText(
                node,
                `${fnName}({ ${firstName ? `first: ${firstName}` : ''}${
                  node.arguments[1]
                    ? `, second: ${secondName ?? 'unknown'}`
                    : ''
                } })`
              )
            },
          })
        }
      },
    }
  },
})

export default rule
