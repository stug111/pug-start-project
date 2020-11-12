const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fs = require("fs");

const PATHS = require("../global");

const PAGES_DIR = `${PATHS.src}/pages`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "style.css",
  }),
  ...PAGES.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        minify: false,
      })
  ),
];

module.exports = plugins;
