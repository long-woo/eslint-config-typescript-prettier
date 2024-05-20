# eslint-config-typescript-prettier

🔧 ESLint configuration for TypeScript, using Prettier to format code.

> If you need to format Vue code, you can use [@loongwoo/eslint-config-vue](https://github.com/long-woo/eslint-config-vue).

## use

1. Install dependencies

```sh
pnpm add -D @loongwoo/eslint-config-typescript-prettier

#or
yarn add -D @loongwoo/eslint-config-typescript-prettier

# or
npm install --save-dev @loongwoo/eslint-config-typescript-prettier
```

2. Configure ESLint

```js
import tsPrettier from '@loongwoo/eslint-config-typescript-prettier';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  ...tsPrettier,
  {
    files: ['*.ts', '*.tsx'],
    ignores: ['src/vite-env.d.ts'],
  },
];
```

3. Open the `package.json` file and add the `eslint` command in the `scripts` configuration.

```json
{
   "scripts": {
     "lint": "eslint . --fix"
   }
}
```
