import type { BaseNode } from 'estree-jsx'

export type StringableASTNode<NodeType extends BaseNode> = (
  node: Omit<NodeType, 'type'>
) => NodeType & { __pragma: 'ecu'; toString(): string }
