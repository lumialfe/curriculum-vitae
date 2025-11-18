import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
		output: 'export',
		basePath: isProd ? '/curriculum-vitae' : '',
		assetPrefix: isProd ? '/curriculum-vitae/' : '',
		i18n: {
			locales: ['en', 'es'],
			defaultLocale: 'en',
		}
};

module.exports = nextConfig;
