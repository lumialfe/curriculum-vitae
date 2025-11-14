import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
output: 'export',           // Enables static export
basePath: isProd ? '/curriculum-vitae' : '',
assetPrefix: isProd ? '/curriculum-vitae/' : '',
};

export default nextConfig;
