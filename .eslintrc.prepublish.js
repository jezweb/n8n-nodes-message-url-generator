module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:n8n-nodes-base/community'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['.eslintrc.js', 'node_modules/', 'dist/'],
	rules: {
		'n8n-nodes-base/community-package-json-name-still-default': 'off',
	},
};