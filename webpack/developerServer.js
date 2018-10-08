const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = path => [
  {
    target: 'web',
    devServer: {
      host: 'localhost',
      port: 8383,
      contentBase: path.resolve(__dirname, './'),
      publicPath: '/',
      historyApiFallback: {
        index: '/',
      },
      stats: 'errors-only',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Task Manager',
        hash: true,
        minify: true,
        template: './client/index.html',
      }),
    ],
  },
];
