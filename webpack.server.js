const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/api/server.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle_server.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: "ignore-loader",
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
