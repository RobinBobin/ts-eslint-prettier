# Installation

Install the following packages:

    pnpm i --save-dev @robinbobin/ts-eslint-prettier eslint prettier typescript

For React (Native) projects:

    pnpm i --save-dev @types/react eslint-plugin-react-hooks react

# Config files

## tsconfig.json

Assuming you have the `src` folder at the top of your project:

    {
      "compilerOptions": {
        "declaration": true,
        "outDir": "js"
      },
      "extends": "@robinbobin/ts-eslint-prettier/tsconfig.base",
      "include": ["./*.mjs", "./src/**/*.ts"]
    }

For React (Native) projects:

    {
      "compilerOptions": {
        "declaration": true,
        "outDir": "js"
      },
      "extends": "@robinbobin/ts-eslint-prettier/tsconfig.base",
      "include": ["./*.mjs", "./src/**/*.ts", "./src/**/*.tsx"]
    }

## eslint.config.mjs

    import eslintConfig from '@robinbobin/ts-eslint-prettier/eslint.config.mjs'

    export default [
      ...eslintConfig,
    ]

For React (Native) projects:

    import config from '@robinbobin/ts-eslint-prettier/eslint.config.mjs'
    import configPluginReactHooks from '@robinbobin/ts-eslint-prettier/eslint.config.plugin.react.hooks.mjs'

    export default [
      ...config,
      ...configPluginReactHooks,
      {
        rules: {
          'react-hooks/exhaustive-deps': 'error'
        }
      }
    ]

## prettier.config.mjs

    export { default } from '@robinbobin/ts-eslint-prettier/prettier.config.mjs'

## .prettierignore

    /js
    /pnpm-lock.yaml

## .gitignore

    /js
    node_modules

# package.json

Add the the following to `package.json`:

    "files": [
      "/js",
      "/src"
    ]

# Scripts

## prepack.sh

    #!/bin/bash
    rm -rf js &&
    pnpm tsc &&
    pnpm eslint &&
    pnpm prettier . --check

<!-- -->

    chmod u+x prepack.sh

`package.json`:

    "scripts": {
      "prepack": "./prepack.sh"
    }
