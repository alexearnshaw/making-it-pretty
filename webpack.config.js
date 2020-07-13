const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');
module.exports = {
  entry: './_assets/js/app.js',
  output: {
    path: path.resolve(__dirname, "_site"),  
    filename: './assets/bundle.js', /*put output in eleventy site dir*/
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                precss,
                autoprefixer,
              ];
            },
          },
        },
        { loader: 'sass-loader' },
      ],
    }],
  },
};