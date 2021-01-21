import "dotenv/config";
import * as path from "path";
import * as webpack from "webpack";

const environment = process.env.NODE_ENV === "development" ? "development" : "production";

const config: webpack.Configuration = {
  mode: environment,
  entry: "./src/App.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }, {
        test: /\.scss$/,
        use: {
          loader: "sass-loader"
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "App.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080
  },
  devtool: "source-map"
};

export default config;
