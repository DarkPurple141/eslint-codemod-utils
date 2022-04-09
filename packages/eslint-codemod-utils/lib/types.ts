import type { Node as BaseNode, JSXSpreadChild } from 'estree-jsx'
import type { Rule } from 'eslint'

export type EslintCodemodUtilsBaseNode = BaseNode | JSXSpreadChild

export type RuleListener<T extends EslintNode = EslintNode> = {
  [E in T as E['type']]?: (eventNodeListener: E) => void
}

export type StringableASTNode<T extends EslintCodemodUtilsBaseNode> = T & {
  // __pragma: 'ecu'
  toString(): string
}

export type StringableASTNodeFn<
  EstreeNodeType extends EslintCodemodUtilsBaseNode
> = (node: Omit<EstreeNodeType, 'type'>) => StringableASTNode<EstreeNodeType>

export type EslintNode = Rule.NodeParentExtension & EslintCodemodUtilsBaseNode
