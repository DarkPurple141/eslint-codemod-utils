import type { TSESLint } from '@typescript-eslint/utils'

import renameProp from './rules/rename-prop'
import changeComposition from './rules/change-composition'
import sortImports from './rules/sort-imports'
import noCodemodComment from './rules/no-codemod-comment'

// `tsc --declaration` inlines the inferred return type, and the rule objects
// reference types from `@typescript-eslint/types` that live two levels up
// through the workspace symlinks. Pin the exported type explicitly so the
// emitted `.d.ts` is self-contained and portable.
type AnyRule = TSESLint.RuleModule<string, readonly unknown[]>
export const rules: Record<string, AnyRule> = {
  /**
   * Remove or update a jsx prop
   */
  'jsx/update-prop-name': renameProp,
  /**
   * Remove or update import
   */
  'update-import': renameProp,
  /**
   * Update jsx prop value
   */
  'jsx/update-prop-value': renameProp,
  /**
   * Has codemod TODO
   */
  'no-codemod-comment': noCodemodComment,
  'change-composition': changeComposition,
  'sort-imports': sortImports,
}

export { hash } from './hash'
