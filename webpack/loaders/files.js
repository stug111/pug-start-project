module.exports = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "assets/img/[name].[ext]",
      },
    },
  ],
};
