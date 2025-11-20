import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
		output: 'export',
		basePath: isProd ? '/curriculum-vitae' : '',
		assetPrefix: isProd ? '/curriculum-vitae/' : ''
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
