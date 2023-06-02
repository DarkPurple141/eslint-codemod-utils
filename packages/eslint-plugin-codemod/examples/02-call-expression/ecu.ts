import { Rule } from 'eslint'
import {
  callExpression,
  identifier,
  objectExpression,
  property,
  Property,
} from 'eslint-codemod-utils'
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
              const thing = callExpression({
                ...node,
                optional: false,
                arguments: [
                  objectExpression({
                    properties: ['first', 'second']
                      .map((id, idx) => {
                        return node.arguments[idx]
                          ? property({
                              key: identifier(id),
                              // @ts-expect-error
                              value: node.arguments[idx],
                            })
                          : null
                      })
                      .filter(Boolean) as Property[],
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
}

export default rule
