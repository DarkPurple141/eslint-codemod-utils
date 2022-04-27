import type {
  ImportDeclaration,
  ImportSpecifier,
  JSXAttribute,
  JSXElement,
  JSXIdentifier,
} from 'estree-jsx'
import {
  identifier,
  importDeclaration,
  importDefaultSpecifier,
  importSpecifier,
  literal,
} from '../nodes'
import type { StringableASTNode } from '../types'
import { isNodeOfType } from './is-node-of-type'

export function hasJSXAttribute(node: JSXElement, attributeName: string) {
  if (!node.openingElement) return false

  if (!node.openingElement.attributes.length) return false

  return node.openingElement.attributes.some(
    (attr) =>
      isNodeOfType<JSXAttribute>(attr, 'JSXAttribute') &&
      attr.name.name === attributeName
  )
}

export function hasJSXChild(
  node: JSXElement,
  childIdentifier: string
): boolean {
  const jsxIdentifierMatch =
    isNodeOfType<JSXIdentifier>(node.openingElement.name, 'JSXIdentifier') &&
    node.openingElement.name.name &&
    node.openingElement.name.name === childIdentifier

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
 * Whether a declaration does or does not include a specified source.
 *
 * @param declaration
 * @param source
 * @returns
 */
export function hasImportDeclaration(
  declaration: ImportDeclaration,
  source: string
): boolean {
  return declaration.source.value === source
}

/**
 *
 * @param declaration
 * @param specifierId
 */
export function hasImportSpecifier(
  declaration: ImportDeclaration,
  importName: string | 'default'
) {
  if (importName === 'default') {
    return declaration.specifiers.some(
      (spec) => spec.type === 'ImportDefaultSpecifier'
    )
  }

  return declaration.specifiers
    .filter((spec): spec is ImportSpecifier => spec.type === 'ImportSpecifier')
    .some((node) => node.imported.name === importName)
}

/**
 * Appends or adds an import specifier to an existing import declaration.
 *
 * Does not validate whether the insertion is already present.
 *
 * @param declaration
 * @param importName
 * @param specifierAlias
 * @returns {StringableASTNode<ImportDeclaration>}
 */
export function insertImportSpecifier(
  declaration: ImportDeclaration,
  importName: string | 'default',
  specifierAlias?: string
): StringableASTNode<ImportDeclaration> {
  if (importName === 'default' && !specifierAlias) {
    throw new Error(
      'A specifier name must be provided when inserting the default import.'
    )
  }

  const id = identifier(importName)

  return importDeclaration({
    ...declaration,
    specifiers: declaration.specifiers.concat(
      importName === 'default'
        ? importDefaultSpecifier({
            // @ts-ignore
            local: identifier(specifierAlias),
          })
        : importSpecifier({
            imported: identifier(importName),
            local: specifierAlias ? identifier(specifierAlias) : id,
          })
    ),
  })
}

/**
 * @example
 * ```tsx
 * insertImportDeclaration('source', ['specifier', 'second'])
 *
 * // produces
 * import {  specifier, second } from 'source'
 * ```
 *
 * @example
 * ```tsx
 *  * insertImportDeclaration('source', ['specifier', { imported: 'second', local: 'other' }])
 *
 * // produces
 * import { specifier, second as other } from 'source'
 * ```
 */
export function insertImportDeclaration(
  source: string,
  specifiers: (string | { local: string; imported: string })[]
): StringableASTNode<ImportDeclaration> {
  return importDeclaration({
    source: literal(source),
    specifiers: specifiers.map((spec) => {
      return spec === 'default'
        ? importDefaultSpecifier({ local: identifier('__default') })
        : importSpecifier({
            imported:
              typeof spec === 'string'
                ? identifier(spec)
                : identifier(spec.imported),
            local:
              typeof spec === 'string'
                ? identifier(spec)
                : identifier(spec.local),
          })
    }),
  })
}

/**
 * Removes an import specifier to an existing import declaration.
 *
 * @param declaration
 * @param importName
 * @returns {StringableASTNode<ImportDeclaration>}
 */
export function removeImportSpecifier(
  declaration: ImportDeclaration,
  importName: string | 'default'
): StringableASTNode<ImportDeclaration> {
  return importDeclaration({
    ...declaration,
    specifiers: declaration.specifiers.filter((spec) =>
      importName === 'default'
        ? spec.type !== 'ImportDefaultSpecifier'
        : !(
            spec.type === 'ImportSpecifier' && spec.imported.name === importName
          )
    ),
  })
}
