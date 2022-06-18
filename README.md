# eslint-config-typescript-prettier

🔧 一个 TypeScript 的 ESLint 配置，使用 Prettier 格式化代码。

## 使用

1.安装依赖

```sh
pnpm add -D eslint @longwoo/eslint-config-typescript-prettier

# or
yarn add -D eslint @longwoo/eslint-config-typescript-prettier

# or
npm install --save-dev eslint @longwoo/eslint-config-typescript-prettier
```

2.配置 ESLint

```json
{
  "extends": "@longwoo/eslint-config-typescript-prettier"
}
```

3.打开 `package.json` 文件，在 `scripts` 配置中添加 `eslint` 命令，运行 ESLint 校验代码。

```json
{
  "scripts": {
    "eslint": "eslint --ext .js,.ts,.tsx src"
  }
}
```
