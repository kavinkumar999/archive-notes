const publicPath = process.env.NODE_ENV === 'production' ? '/archive-notes' : '';

const config = {
  basePath: publicPath,
  images: {
    domains: ['kavinkumar999.github.io'],
  },
  publicRuntimeConfig: {
    publicPath,
  },
};

export default config;