import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// export default tseslint.config([{
// 	parser: '@typescript-eslint/parser',
// 	plugins: ['@typescript-eslint'],
// 	extends: [
// 		'eslint:recommended',
// 		'plugin:@typescript-eslint/recommended',
// 		'plugin:prettier/recommended'
// 	],
// 	rules: {
// 		'prettier/prettier': 'warn'
// 	}
// }]);

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended
)
