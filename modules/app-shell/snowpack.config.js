const postcss = require('rollup-plugin-postcss');
const lessLoader = require('rollup-plugin-postcss-webpack-alias-less-loader');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [],
  optimize: {
    bundle: true,
    sourcemap: false,
  },
  packageOptions: {
    NODE_ENV: true,
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    clean: true,
  },
};
