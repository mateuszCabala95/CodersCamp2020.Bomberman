import { CleanWebpackPlugin } from "clean-webpack-plugin";
import "dotenv/config";
import * as path from "path";
import * as webpack from "webpack";

const environment = process.env.NODE_ENV === "development" ? "development" : "production";

const config: webpack.Configuration = {
  mode: environment,
  entry: {
    main: path.resolve(__dirname, "./src/App.ts"),
    html: path.resolve(__dirname, "./src/index.html")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }, {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },  {
        test: /\.html$/i,
        loader: "html-loader"
      },{
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    publicPath: "/",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 8080
  },
  devtool: "source-map"
};

export default config;
