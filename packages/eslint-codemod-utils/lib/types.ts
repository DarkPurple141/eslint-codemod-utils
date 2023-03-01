import type { Node as BaseNode, JSXSpreadChild } from 'estree-jsx'
import type { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/types'

export type EslintCodemodUtilsBaseNode =
  | BaseNode
  | { type: AST_NODE_TYPES }
  | JSXSpreadChild

export type WithoutType<T extends EslintCodemodUtilsBaseNode> = Omit<T, 'type'>

export type StringableASTNode<T extends EslintCodemodUtilsBaseNode> = T & {
  toString(): string
}

export type StringableASTNodeFn<
  EstreeNodeType extends EslintCodemodUtilsBaseNode,
  Key extends keyof EstreeNodeType = 'type'
> = (
  node: WithoutType<
    Key extends 'type'
      ? EstreeNodeType
      : Omit<EstreeNodeType, Key> &
          Pick<Partial<EstreeNodeType>, Key> & { type: any }
  >
) => StringableASTNode<EstreeNodeType>

export type EslintNode = EslintCodemodUtilsBaseNode &
  Pick<TSESTree.BaseNode, 'parent'>
