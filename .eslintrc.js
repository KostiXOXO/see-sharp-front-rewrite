module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	extends: [
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		// 'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	rules: {
		'react/jsx-uses-vars': 'error',
		'react/jsx-uses-react': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
	overrides: [
		{
			// enable the rule specifically for TypeScript files
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
};
