import type { NextConfig } from 'next';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repositoryName.endsWith('.github.io');
const basePath = process.env.NODE_ENV === 'production' && !isUserSite && repositoryName
  ? `/${repositoryName}`
  : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  experimental: {
    useTypeScriptCli: false,
  },
};

export default nextConfig;
