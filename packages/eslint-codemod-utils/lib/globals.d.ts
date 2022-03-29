declare module 'espree' {
  export function parse(
    code: string,
    options?: { ecmaVersion?: number; sourceType?: string }
  ): {
    body: any
  }
}
