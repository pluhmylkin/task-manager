const path = require('path');
const merge = require('webpack-merge');

const developerServer = require('./webpack/developerServer');
const common = require('./webpack/common');

const PATHS = {
  source: path.join(__dirname, '/client/'),
  build: path.join(__dirname, '/public/'),
};

module.exports = env => {
  if (env === 'production') {
    return common(PATHS, env);
  }
  if (env === 'development') {
    return merge.multiple(common(PATHS, env), developerServer(path));
  }
};
