import type { BaseNode } from 'estree-jsx'

export type StringableASTNode<T extends BaseNode> = (
  node: Omit<T, 'type'>
) => T & { __pragma: 'ecu'; toString(): string }
