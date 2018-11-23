module.exports = () => ({
  rules: [
    {
      test: /\.js$/,
      exclude: [/node_modules/, /public/],
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-async-to-generator', 'transform-class-properties'],
            presets: ['env', 'react'],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader',
      exclude: [/node_modules/, /public/],
    },
  ],
});
