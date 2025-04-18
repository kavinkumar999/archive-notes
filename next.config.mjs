const publicPath = process.env.NODE_ENV === 'production' ? '/archive-notes' : '';

const config = {
  basePath: publicPath,
  assetPrefix: publicPath,
  output: 'export',
  images: {
    domains: ['kavinkumar999.github.io'],
    unoptimized: true,
  },
  publicRuntimeConfig: {
    publicPath,
  },
};

export default config;