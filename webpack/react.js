module.exports = () => ({
  rules: [
    {
      test: /\.js$/,
      exclude: [/node_modules/, /public/],
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              "transform-async-to-generator",
              "transform-class-properties"
            ]
          }
        },
      ],
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader',
      exclude: [/node_modules/, /public/],
    },
    // {
    //   test: /\.less$/,
    //   loader: "style-loader!css-loader!autoprefixer-loader!less",
    //   exclude: [/node_modules/, /public/]
    // },
    // {
    //   test: /\.svg/,
    //   loader: "url-loader?limit=26000&mimetype=image/svg+xml"
    // },
    // {
    //   test: /\.jsx$/,
    //   exclude: [/node_modules/, /public/],
    //   use: [{
    //     loader: "react-hot-loader/webpack!babel-loader"
    //   }]
    // }
  ],
});
