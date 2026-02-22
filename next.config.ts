import type { NextConfig } from 'next';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	output: 'export',
	trailingSlash: true,
	webpack(config, { isServer }) {
		if (!isServer) {
			const alias =
				config.resolve?.alias && !Array.isArray(config.resolve.alias)
					? config.resolve.alias
					: {};

			config.resolve ??= {};
			config.resolve.alias = {
				...alias,
				'../build/polyfills/polyfill-module': false,
				'../build/polyfills/polyfill-module.js': false,
				'next/dist/build/polyfills/polyfill-module': false,
				'next/dist/build/polyfills/polyfill-module.js': false,
			};
		}

		return config;
	},
	experimental: {
		inlineCss: true,
	},
	outputFileTracingRoot: currentDir,
	images: {
		unoptimized: true,
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
