import type { Rule } from 'eslint'

/**
 * Insert a generic string as a `Rule.Fix` at the start of a file.
 *
 * @returns {Rule.Fix}
 */
export function insertAtStartOfFile(
  fixer: Rule.RuleFixer,
  str: string
): Rule.Fix {
  return fixer.insertTextBeforeRange([0, 0], str)
}
