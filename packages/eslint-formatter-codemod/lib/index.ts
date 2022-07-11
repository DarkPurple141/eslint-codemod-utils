import { ESLint } from 'eslint'

const formatter: ESLint.Formatter = {
  format(results) {
    return JSON.stringify(
      results.map((result) => {
        return result.messages
      })
    )
  },
}

export default formatter.format
