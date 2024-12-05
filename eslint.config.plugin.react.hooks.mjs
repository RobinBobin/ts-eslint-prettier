// @ts-expect-error Cannot find module 'eslint-plugin-react-hooks' or its corresponding type declarations
// eslint-disable-next-line import-x/no-unresolved
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-hooks': reactHooks
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...reactHooks.configs.recommended.rules
    }
  }
]
