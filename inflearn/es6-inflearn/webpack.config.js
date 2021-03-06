var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: "babel-loader",
        options: {
          "presets": [
            [
              "@babel/preset-env",
              {
                "targets": {
                  "browsers": [ ">0.25%", "ie >= 10", "not op_mini all"]
                },
                "debug": true
              }
            ]
          ]
        }
      }

    }]
  }
};
