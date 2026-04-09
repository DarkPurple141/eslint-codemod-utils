import type { TSESLint } from '@typescript-eslint/utils'
import type { TSESTree } from 'eslint-codemod-utils'

/**
 * Finds a semicolon attached to a node literal
 */
export function findSemi(node: TSESTree.Literal, source: TSESLint.SourceCode) {
  const token = source.getLastToken(node)?.value
  const possibleFinalToken = source.getTokenAfter(node)?.value
  const tokenHasSemi = /;/.test(token || '')
  const punctionatorHasSemi = /;/.test(possibleFinalToken || '')

  return tokenHasSemi || punctionatorHasSemi
}
