import type * as eslint from 'eslint'
import type { TSESTree } from '@typescript-eslint/types'

/**
 * @example
 * ```tsx
 * // this is the search comment
 * const findThisNode = 10
 * ^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export function getNodeAfterComment(
  source: eslint.SourceCode,
  comment: TSESTree.Comment
): eslint.Rule.Node | null {
  // `eslint.SourceCode.getTokenAfter` expects the vanilla-ESLint `Comment`
  // shape; cast across the thin-but-real shape difference between it and
  // `TSESTree.Comment` (the runtime objects are the same).
  const token = source.getTokenAfter(comment as unknown as eslint.AST.Token)

  if (token) {
    return source.getNodeByRangeIndex(token.range[1]) as eslint.Rule.Node
  }

  return null
}
