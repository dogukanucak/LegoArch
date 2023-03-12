const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]",
    path: __dirname + "/build",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "PRODUCT",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./RemoteApp": "./src",
      },
    }),
  ],
  devServer: {
    compress: true,
    port: 9001,
    hot: false,
  },
};
