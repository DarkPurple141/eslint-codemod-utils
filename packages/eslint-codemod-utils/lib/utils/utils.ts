import {
  ImportDeclaration,
  JSXAttribute,
  JSXElement,
  JSXIdentifier,
} from 'estree-jsx'
import { identifier, importDeclaration, importSpecifier } from '../nodes'
import type {
  EslintCodemodUtilsBaseNode,
  EslintNode,
  StringableASTNode,
} from '../types'

export function isNodeOfType<T extends EslintCodemodUtilsBaseNode>(
  node: EslintCodemodUtilsBaseNode,
  type: T['type']
): node is T {
  return node.type === type
}

export function closestOfType<T extends EslintNode>(
  node: EslintNode,
  type: T['type']
): EslintNode | null {
  if (isNodeOfType(node, type)) {
    return node
  }

  if (node.parent) {
    return closestOfType(node.parent, type)
  }

  return null
}

export function hasJSXAttribute(node: JSXElement, attributeName: string) {
  if (!node.openingElement) return false

  if (!node.openingElement.attributes.length) return false

  return node.openingElement.attributes.some(
    (attr) =>
      isNodeOfType<JSXAttribute>(attr, 'JSXAttribute') &&
      attr.name.name === attributeName
  )
}

function isJSXIdentifier(node: JSXIdentifier, id: string) {
  return node.name === id
}

export function hasJSXChild(
  node: JSXElement,
  childIdentifier: string
): boolean {
  const jsxIdentifierMatch =
    node.openingElement.name.type === 'JSXIdentifier' &&
    node.openingElement.name.name &&
    isJSXIdentifier(node.openingElement.name, childIdentifier)

  return (
    jsxIdentifierMatch ||
    Boolean(
      node.children &&
        node.children
          .filter((child): child is JSXElement =>
            isNodeOfType(child, 'JSXElement')
          )
          .find((child) => hasJSXChild(child, childIdentifier))
    )
  )
}

/**
 * Appends or adds an import specifier to an existing import declaration.
 *
 * @param declaration
 * @param specifierId
 * @param specifierAlias
 * @returns {StringableASTNode<ImportDeclaration>}
 */
export function insertImportSpecifier(
  declaration: ImportDeclaration,
  specifierId: string,
  specifierAlias?: string
): StringableASTNode<ImportDeclaration> {
  const id = identifier(specifierId)
  return importDeclaration({
    ...declaration,
    specifiers: declaration.specifiers.concat(
      importSpecifier({
        imported: identifier(specifierId),
        local: specifierAlias ? identifier(specifierAlias) : id,
      })
    ),
  })
}

/**
 * Removes an import specifier to an existing import declaration.
 *
 * @param declaration
 * @param specifierId
 * @param specifierAlias
 * @returns {StringableASTNode<ImportDeclaration>}
 */
export function removeImportSpecifier(
  declaration: ImportDeclaration,
  specifierId: string
): StringableASTNode<ImportDeclaration> {
  return importDeclaration({
    ...declaration,
    specifiers: declaration.specifiers.filter(
      (spec) =>
        !(spec.type === 'ImportSpecifier' && spec.imported.name === specifierId)
    ),
  })
}
