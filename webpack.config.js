const path = require("path");
const HTMLWebpack = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: false,
          port: 4200,
          static: {
            directory: path.join(__dirname, "assets/contentImg"),
            serveIndex: true,
          },
        },
      };

module.exports = ({ develop }) => ({
  mode: develop ? "development" : "production",
  devtool: develop ? "inline-source-map" : false,
  target: develop ? "web" : "browserslist",
  context: path.resolve(__dirname, "src"),
  entry: "./script.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name]_[hash][ext]",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpack({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${path.resolve(__dirname, "src/assets/contentImg")}`,
          to: `${path.resolve(__dirname, "dist/assets/contentImg")}`,
        },
      ],
    }),
    new MiniCssPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(s*)css$/i,
        use: [
          MiniCssPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(mp3|wav)$/i,
        type: "asset",
        generator: {
          filename: "audio/[name]_[hash][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  ...devServer(develop),
});
