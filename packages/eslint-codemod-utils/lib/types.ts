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

export type EslintCodemodUtilsBaseNode = BaseNode

/**
 * A recursive transformer that makes every `loc` and `range` field in an AST
 * node (and its children) optional. The `parent` field is dropped because
 * `TSESTree.BaseNode.parent` is self-referential (every node points back to
 * its parent), which would cause `Loose<T>` to recurse infinitely.
 *
 * Distributive conditional type semantics mean that unions like
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
        [K in keyof T as K extends 'parent' | LocationKeys ? never : K]: Loose<
          T[K]
        >
      } & {
        // loc/range are always optional in the loose view.
        [K in Extract<keyof T, LocationKeys>]?: T[K]
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
