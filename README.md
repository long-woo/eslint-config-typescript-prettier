# eslint-config-typescript-prettier

🔧 一个 TypeScript 的 ESLint 配置，使用 Prettier 格式化代码。

> 如果需要对 Vue 的代码进行格式化，可以使用 [@longwoo/eslint-config-vue](https://github.com/long-woo/eslint-config-vue)。

## 使用

1.安装依赖

```sh
pnpm add -D @longwoo/eslint-config-typescript-prettier

# or
yarn add -D @longwoo/eslint-config-typescript-prettier

# or
npm install --save-dev @longwoo/eslint-config-typescript-prettier
```

2.配置 ESLint

```json
{
  "extends": "@longwoo/typescript-prettier"
}
```

3.打开 `package.json` 文件，在 `scripts` 配置中添加 `eslint` 命令，运行 ESLint 校验代码。

```json
{
  "scripts": {
    "eslint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  }
}
```
