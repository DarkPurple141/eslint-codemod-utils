import { typeToHelperLookup } from '../constants'
import type { EslintCodemodUtilsBaseNode, StringableASTNode } from '../types'

export type NodeMap<
  T extends EslintCodemodUtilsBaseNode = EslintCodemodUtilsBaseNode
> = {
  [E in T as E['type']]: (eventNodeListener: E) => StringableASTNode<E>
}

/**
 * Internally focused function to help resolve / parse the AST. It hands off to the
 * `typeToHelperLookup` map to apply the correct transformation.
 *
 * In theory this function can be applied to any valid esprima node blindly and
 * it will correctly resolve to an `eslint-codemod-utils` stringable node.
 *
 * @internal
 */
export const node = <EstreeNodeType extends EslintCodemodUtilsBaseNode>(
  estNode: EstreeNodeType
): StringableASTNode<EstreeNodeType> => {
  // @ts-expect-error this error will be suppressed until all nodes are implemented
  return typeToHelperLookup[estNode.type](estNode)
}
