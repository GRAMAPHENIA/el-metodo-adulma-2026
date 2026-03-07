import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default defineConfig([
	globalIgnores(['**/.next/**', '**/node_modules/**', '**/dist/**']),
	...compat.extends('next/core-web-vitals'),
	{
		rules: {
			'no-restricted-syntax': [
				'error',
				{
					selector: 'ExportAllDeclaration',
					message: 'Barrel files are not allowed. Use direct imports only.',
				},
			],
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['**/index', '**/index.*'],
							message: 'Import modules directly instead of index barrel files.',
						},
					],
				},
			],
		},
	},
]);
