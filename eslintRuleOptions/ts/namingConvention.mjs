/* eslint-disable sort-keys */

export default [
  {
    selector: 'interface',
    format: ['PascalCase'],
    prefix: ['I']
  },
  {
    selector: 'typeAlias',
    format: ['PascalCase'],
    prefix: ['T']
  },
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['PascalCase'],
    prefix: ['are', 'is', 'should', 'has', 'have', 'can', 'did', 'will']
  }
]
