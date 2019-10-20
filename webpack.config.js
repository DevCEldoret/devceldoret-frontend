const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
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
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        oneOf: [
          {
            test: /\.component\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: "[name]__[local]___[hash:base64:5]"
                  }
                }
              }
            ]
          },
          {
            use: ["style-loader", "css-loader"]
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
