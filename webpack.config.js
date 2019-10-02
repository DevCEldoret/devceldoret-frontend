const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.ts',
  devtool: "source-map",

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.m?(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}