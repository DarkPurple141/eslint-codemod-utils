import { typeToHelperLookup } from '../constants'
import type {
  EslintCodemodUtilsBaseNode,
  Loose,
  StringableASTNode,
} from '../types'

export type NodeMap<
  T extends EslintCodemodUtilsBaseNode = EslintCodemodUtilsBaseNode
> = {
  [E in T as E['type']]: (eventNodeListener: E) => StringableASTNode<E>
}

/**
 * Internally focused function to help resolve / parse the AST. It hands off
 * to the `typeToHelperLookup` map to apply the correct transformation.
 *
 * This function can be applied to any valid `espree`/`typescript-eslint` node
 * — whether it was produced by a parser (with full `loc`/`range`) or
 * synthesised by a consumer through one of the node-factory helpers (which
 * return `StringableASTNode<T>` where `loc`/`range` are optional).
 *
 * @internal
 */
export const node = <EstreeNodeType extends EslintCodemodUtilsBaseNode>(
  estNode: Loose<EstreeNodeType>
): StringableASTNode<EstreeNodeType> => {
  // `typeToHelperLookup` is a discriminated-union dispatch table; TypeScript
  // can't correlate `estNode.type` with the matching handler at the call site
  // (doing so would require N-way correlated-union support). Narrow via a
  // single explicit cast — the map entries are authored to respect the
  // `NodeMap` contract, so the dispatch is safe at runtime.
  type Handler = (
    n: Loose<EstreeNodeType>
  ) => StringableASTNode<EstreeNodeType>
  const handler = typeToHelperLookup[
    estNode.type as keyof typeof typeToHelperLookup
  ] as unknown as Handler
  return handler(estNode)
}
