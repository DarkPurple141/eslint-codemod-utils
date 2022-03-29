import type { BaseNode } from 'estree-jsx'
import type { Rule } from 'eslint'

export type StringableASTNode<NodeType extends BaseNode> = (
  node: Omit<NodeType, 'type'>
) => NodeType & { __pragma: 'ecu'; toString(): string }

export type EslintNode = Rule.NodeParentExtension & BaseNode
