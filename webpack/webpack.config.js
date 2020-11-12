const path = require("path");
const plugins = require("./plugins");
const loaders = require("./loaders");

const isDev = "development" === process.env.NODE_ENV;

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  mode: process.env.NODE_ENV || "development",
  stats: { warnings: false },
  devtool: isDev ? "inline-source-map" : false,
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    open: true,
    port: 8080,
    overlay: {
      errors: true,
    },
  },
  module: {
    rules: loaders,
  },
  plugins,
};
