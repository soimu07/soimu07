const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$|\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]",
                context: path.resolve(__dirname, "src"),
              },
              localsConvention: "camelCase",
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "dist/index.html",
    }),
  ],
};
