const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fs = require("fs");

const PATHS = require("../global");

const PAGES_DIR = `${PATHS.src}/pages`;

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "style.css",
  }),
  new HtmlWebpackPlugin({
    template: `${PAGES_DIR}/index.pug`,
  }),
];

module.exports = plugins;
