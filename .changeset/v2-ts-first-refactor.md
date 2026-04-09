---
'eslint-codemod-utils': major
---

**Breaking:** TypeScript-first v2 refactor.

The library's type system has been rebuilt around `@typescript-eslint/types` (`TSESTree`) instead of `estree-jsx`. This is the single biggest user-facing change: every public helper is now typed against `TSESTree.*` rather than the legacy ESTree interfaces.

### Headline changes

- **TSESTree-first types.** `TSESTree`, `AST_NODE_TYPES`, and `AST_TOKEN_TYPES` are re-exported from the package root. Node helpers (`jsxElement`, `callExpression`, `identifier`, …) now accept and return TSESTree-shaped nodes.
- **`Loose<T>` helper type.** Public helpers accept a recursively-loosened view of `TSESTree` nodes where `loc`/`range` are optional at every depth, so constructed nodes compose cleanly with parser-produced nodes without forcing callers to synthesise location info. `Loose` is exported alongside the existing `StringableASTNode`, `StringableASTNodeFn`, and `WithoutType` utilities.
- **Typed `literal(…)` overloads.** `literal('x')` now returns `StringableASTNode<StringLiteral>`, `literal(1)` returns `NumberLiteral`, etc. — you no longer need to cast the result when passing it into helpers that expect a specific `Literal` sub-variant (e.g. `importDeclaration({ source: literal('x') })`).
- **`leadingComments` is wired back into `jsxOpeningElement`.** The helper accepts an optional `leadingComments: Comment[]` input and prepends them to the rendered output, restoring the documented behaviour from the v1 series.
- **No more `@ts-expect-error` suppressions.** Every type escape hatch has been removed from the library and the example plugin — the `Loose<…>` + overload design is sufficient to type the full public surface cleanly.

### Removed

- `@types/estree-jsx` is no longer a dependency. Consumers that were reaching for `import type { … } from 'eslint-codemod-utils'` to get ESTree types should switch to the `TSESTree` re-export.
- The legacy `EslintNode` / `TSEslintNode` aliases are consolidated into `ESLintNode`.

### ESLint v8 / v9 compatibility

The library now declares `eslint@^8 || ^9` as an optional peer dependency. It has no runtime dependency on `eslint` itself — it only consults the `Scope`, `SourceCode`, and `Rule` type declarations — so it works with any ESLint host in that range. The example plugin (`eslint-plugin-codemod`) has been migrated from vanilla `eslint.Rule.RuleModule` to `@typescript-eslint/utils` `ESLintUtils.RuleCreator`, which is the recommended pattern for TypeScript-authored rules on both ESLint 8 and 9.

### Migration notes

- Replace any imports of `Identifier`, `JSXElement`, `Literal`, etc. from `eslint-codemod-utils` with `TSESTree.Identifier`, `TSESTree.JSXElement`, `TSESTree.Literal` (available via the re-exported `TSESTree` namespace).
- If you were relying on `literal(n)` returning the wide `Literal` union, note that it now returns the narrowed sub-variant — assignments into variables typed as `Literal` continue to work, but assignments into variables typed as e.g. `StringLiteral` now succeed without a cast.
- If you author rules that pass helper output back into `eslint.Rule.Node` parameters, prefer `@typescript-eslint/utils`' `RuleCreator` for consistent TSESTree typing end-to-end.
