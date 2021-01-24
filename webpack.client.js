const path = require("path");

module.exports = {
  entry: "./web/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "bundle_client.js",
  },
  module: {
    rules: [
      {
        test: /\\web\\.*\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\\web\\.*\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
