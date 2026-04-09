import { ESLintUtils } from '@typescript-eslint/utils'
import {
  AST_NODE_TYPES,
  importDeclaration,
  isNodeOfType,
} from 'eslint-codemod-utils'

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

/**
 * Adapted for presentational / demo purposes only
 * @fileoverview Rule to require sorting of import declarations
 * @author Christian Schuller
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
type SortImportsOptions = {
  ignoreCase?: boolean
  ignoreMemberSort?: boolean
}

const rule = createRule<[SortImportsOptions?], 'sortMembersAlphabetically'>({
  name: 'sort-imports',
  defaultOptions: [{}],
  meta: {
    type: 'suggestion',

    docs: {
      description: 'enforce sorted import declarations within modules',
      recommended: false,
    },

    schema: [
      {
        type: 'object',
        properties: {
          ignoreCase: {
            type: 'boolean',
            default: false,
          },
          ignoreMemberSort: {
            type: 'boolean',
            default: false,
          },
        },
        additionalProperties: false,
      },
    ],

    fixable: 'code',
    messages: {
      sortMembersAlphabetically:
        "Member '{{memberName}}' of the import declaration should be sorted alphabetically.",
    },
  },

  create(context) {
    const configuration = context.options[0] ?? {}
    const { ignoreCase = false, ignoreMemberSort = false } = configuration

    return {
      ImportDeclaration(node) {
        // Pair each specifier with its original position so we can detect
        // whether the sorted array differs from the source order.
        const indexed = node.specifiers.map((spec, index) => ({
          spec,
          index,
        }))

        const sortedIndexed = [...indexed].sort((a, b) => {
          if (isNodeOfType(a.spec, AST_NODE_TYPES.ImportDefaultSpecifier)) {
            return -1
          }

          if (isNodeOfType(b.spec, AST_NODE_TYPES.ImportDefaultSpecifier)) {
            return 1
          }

          const nameA = a.spec.local.name
          const nameB = b.spec.local.name
          return ignoreCase
            ? nameA.toLowerCase().localeCompare(nameB.toLowerCase())
            : nameA.localeCompare(nameB)
        })

        const unsortedIndexed = sortedIndexed.find(
          (entry, index) => index !== entry.index
        )

        if (!ignoreMemberSort && unsortedIndexed) {
          context.report({
            node: unsortedIndexed.spec,
            messageId: 'sortMembersAlphabetically',
            data: {
              memberName: unsortedIndexed.spec.local.name,
            },
            fix(fixer) {
              return fixer.replaceText(
                node,
                importDeclaration({
                  ...node,
                  specifiers: sortedIndexed.map((entry) => entry.spec),
                }).toString()
              )
            },
          })
        }
      },
    }
  },
})

export default rule
