export type StringableASTNode<T> = T & { __pragma: 'ecu'; toString(): string }
