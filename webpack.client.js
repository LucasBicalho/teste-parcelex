const path = require("path");

module.exports = {
  entry: "./src/web/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "bundle_client.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css"],
  },
};
