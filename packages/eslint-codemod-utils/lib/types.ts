import type { TSESTree } from '@typescript-eslint/types'

type BaseNode = TSESTree.Node

/**
 * Keys on `@typescript-eslint/types` AST nodes that are required at runtime
 * for nodes produced by a real parser, but which this library does not force
 * callers to supply when *constructing* a node for a lint fixer.
 *
 * Making these optional (recursively) in the library's internal view lets
 * consumers pass freshly-constructed partial nodes *and* full parser-produced
 * nodes interchangeably.
 */
type LocationKeys = 'loc' | 'range'

/**
 * Bookkeeping fields on TSESTree nodes that every node-factory helper in
 * this library either already provides a runtime default for, or where a
 * `false` / `[]` / `null` default is unambiguous. Marking these optional in
 * the helper input lets callers focus on semantic fields:
 *
 * ```ts
 * // Before: forced to declare every flag every time
 * property({ key, value, kind: 'init', method: false, computed: false, shorthand: false })
 *
 * // After: the helper fills the defaults in
 * property({ key, value })
 * ```
 *
 * The list is deliberately broad — any field here MUST either:
 *   (a) have a sensible, unambiguous "empty" default the helper can supply,
 *       and the helper MUST actually supply it, or
 *   (b) already be declared optional on the underlying TSESTree node (in
 *       which case marking it optional again is a harmless no-op).
 *
 * The runtime-default obligation is the important part — see `nodes.ts` and
 * `jsx-nodes.ts` for the helpers that honour it.
 */
type DefaultableFields =
  // Call/new/member/chain flags
  | 'optional'
  // Function flavour flags
  | 'async'
  | 'generator'
  // Property / MethodDefinition / PropertyDefinition discriminants
  | 'computed'
  | 'method'
  | 'shorthand'
  | 'kind'
  // Class member modifiers (all declared optional on TSESTree already;
  // listing them here is a harmless no-op that documents intent).
  | 'static'
  | 'override'
  | 'declare'
  | 'readonly'
  | 'definite'
  | 'accessibility'
  // Import/export metadata. NOTE: `exported` is deliberately excluded —
  // it's required on `ExportSpecifier` (the thing being re-exported) even
  // though it's nullable on `ExportAllDeclaration`, so flagging it globally
  // optional would silently weaken the `ExportSpecifier` contract.
  | 'importKind'
  | 'exportKind'
  | 'assertions'
  // JSX-specific defaults
  | 'attributes'
  | 'selfClosing'
  | 'leadingComments'
  | 'closingElement'
  | 'children'
  // TSESTree fields declared optional on most nodes; listing them here
  // lets the handful of required positions stay required while everywhere
  // else picks up the default-free ergonomics.
  | 'decorators'
  | 'typeParameters'

type LooseKeys = LocationKeys | DefaultableFields

export type EslintCodemodUtilsBaseNode = BaseNode

/**
 * A recursive transformer that loosens a TSESTree node for use in node-factory
 * helpers. It:
 *
 *  1. Drops `parent` — `TSESTree.BaseNode.parent` is self-referential, which
 *     would cause `Loose<T>` to recurse infinitely.
 *  2. Makes `loc`/`range` optional at every depth, so constructed nodes don't
 *     need synthetic location info.
 *  3. Makes every field in `DefaultableFields` optional at every depth, so
 *     callers don't have to pass bookkeeping flags the helpers can default.
 *
 * Distributive conditional type semantics mean unions like
 * `TSESTree.Literal = StringLiteral | NumberLiteral | ...` still distribute
 * cleanly through `Loose<…>`, so discriminants are preserved.
 */
// prettier-ignore
export type Loose<T> =
  T extends
    | null
    | undefined
    | boolean
    | number
    | string
    | bigint
    | RegExp
    ? T
    : T extends readonly (infer U)[]
    ? readonly Loose<U>[]
    : T extends Array<infer U>
    ? Loose<U>[]
    : T extends object
    ? {
        // Homomorphic mapped type with key remapping preserves `?` modifiers
        // from the source for every retained field.
        [K in keyof T as K extends 'parent' | LooseKeys ? never : K]: Loose<
          T[K]
        >
      } & {
        // loc/range + every known defaultable field become optional in the
        // loose view. Values themselves are still recursively loosened so
        // that nested constructed nodes compose cleanly.
        [K in Extract<keyof T, LooseKeys>]?: Loose<T[K]>
      }
    : T

/**
 * A node shape where `type` is stripped (the helper supplies it) and every
 * `loc`/`range` is optional at every depth.
 *
 * This is the *input* shape accepted by every node helper.
 */
export type WithoutType<TBaseNode extends EslintCodemodUtilsBaseNode> = Omit<
  Loose<TBaseNode>,
  'type'
>

/**
 * The *output* shape of every node helper: a loosened version of the
 * underlying TSESTree node plus a `toString()` method for rendering to source.
 *
 * Because the output is also loosened, helpers can freely compose — the result
 * of `identifier(...)` can be passed as a child node to another helper without
 * forcing callers to supply synthetic `loc`/`range` fields.
 */
export type StringableASTNode<TBaseNode extends EslintCodemodUtilsBaseNode> =
  Loose<TBaseNode> & {
    toString(): string
  }

export type StringableASTNodeFn<
  EstreeNodeType extends EslintCodemodUtilsBaseNode
> = (node: WithoutType<EstreeNodeType>) => StringableASTNode<EstreeNodeType>

/**
 * @public
 */
export type ESLintNode = EslintCodemodUtilsBaseNode &
  Pick<TSESTree.BaseNode, 'parent'>
