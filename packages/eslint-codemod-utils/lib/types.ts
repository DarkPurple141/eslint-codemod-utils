import type { Node as BaseNode, JSXSpreadChild } from 'estree-jsx'
import type { Rule } from 'eslint'

export type EslintCodemodUtilsBaseNode = BaseNode | JSXSpreadChild
export type WithoutType<T extends EslintCodemodUtilsBaseNode> = Omit<T, 'type'>

export type RuleListener<T extends EslintNode = EslintNode> = {
  [E in T as E['type']]?: (eventNodeListener: E) => void
}

export type StringableASTNode<T extends EslintCodemodUtilsBaseNode> = T & {
  toString(): string
}

export type StringableASTNodeFn<
  EstreeNodeType extends EslintCodemodUtilsBaseNode
> = (node: WithoutType<EstreeNodeType>) => StringableASTNode<EstreeNodeType>

export type EslintNode = Partial<Rule.NodeParentExtension> &
  EslintCodemodUtilsBaseNode
