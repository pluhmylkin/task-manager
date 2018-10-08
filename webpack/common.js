const react = require('./react');

module.exports = (paths, mode) => [
  {
    mode: mode,
    entry: [paths.source + 'index.js'],
    output: {
      path: paths.build + 'build/',
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: react(),
  },
];
