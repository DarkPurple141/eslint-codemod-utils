import { typeToHelperLookup } from '../constants'
import type { EslintCodemodUtilsBaseNode, StringableASTNode } from '../types'

export type NodeMap<
  T extends EslintCodemodUtilsBaseNode = EslintCodemodUtilsBaseNode
> = {
  [E in T as E['type']]: (eventNodeListener: E) => StringableASTNode<E>
}

export const node = <EstreeNodeType extends EslintCodemodUtilsBaseNode>(
  estNode: EstreeNodeType
): StringableASTNode<EstreeNodeType> => {
  // @ts-ignore
  return typeToHelperLookup[estNode.type](estNode)
}
