import type { Node as BaseNode, JSXSpreadChild } from 'estree-jsx'
import type {
  AST_NODE_TYPES,
  BaseNode as RawTSBaseNode,
} from '@typescript-eslint/types/dist/generated/ast-spec'
import type { Rule } from 'eslint'

type TSBaseNode = RawTSBaseNode | { type: keyof typeof AST_NODE_TYPES }

export type EslintCodemodUtilsBaseNode = BaseNode | JSXSpreadChild | TSBaseNode
export type WithoutType<T extends EslintCodemodUtilsBaseNode> = Omit<T, 'type'>

export type RuleListener<T extends EslintNode = EslintNode> = {
  [E in T as E['type']]?: (eventNodeListener: E) => void
}

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
          Pick<Partial<EstreeNodeType>, Key> &
          EslintCodemodUtilsBaseNode
  >
) => StringableASTNode<EstreeNodeType>

export type EslintNode = Partial<Rule.NodeParentExtension> &
  EslintCodemodUtilsBaseNode
