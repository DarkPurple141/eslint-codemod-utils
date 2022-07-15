import type { Scope } from 'eslint'

/**
 * A useful function for finding a variable / variables value. This function
 * traverses the scopes upwards until it arrives at the global scope. It will
 * return when it exhausts the scopes or finds the variable.
 *
 * @param scope The current scope the variable exists in:
 * @param identifierName The identifier / variable we're trying to look up
 * @returns
 */
export function getIdentifierInParentScope(
  scope: Scope.Scope,
  identifierName: string
): Scope.Variable | null {
  let traversingScope: Scope.Scope | null = scope

  while (traversingScope && traversingScope.type !== 'global') {
    const matchedVariable = traversingScope.variables.find(
      (variable) => variable.name === identifierName
    )

    if (matchedVariable) {
      return matchedVariable
    }

    traversingScope = traversingScope.upper
  }

  return null
}
