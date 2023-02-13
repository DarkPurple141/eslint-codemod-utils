import { SourceCode } from 'eslint'
import { Literal } from 'eslint-codemod-utils'

/**
 * Finds a semicolon attached to a node literal
 */
export function findSemi(node: Literal, source: SourceCode) {
  const token = source.getLastToken(node)?.value
  const possibleFinalToken = source.getTokenAfter(node)?.value
  const tokenHasSemi = /;/.test(token || '')
  const punctionatorHasSemi = /;/.test(possibleFinalToken || '')

  return tokenHasSemi || punctionatorHasSemi
}
