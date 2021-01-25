var webpack = require('webpack')
var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    optimization: {
        splitChunks: {
            chunks: () => false,
        },
        runtimeChunk: false
    },
    mode: 'development',
    entry: {
        index: './src/index.ts',
    },

    module: {
        rules: [
            {
                use: [
                  { loader: "webpack-modernizr-loader" }, 
                  'ts-loader'
                ],
                test: /\.modernizrrc\.ts$/,
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  }
                ]
            }
        ],
    },
  devServer: {
      contentBase: "./src"
  },
  plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 15*1024})
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss'],
        alias: {
          modernizr$: path.resolve(__dirname, "/src/.modernizrrc.ts")
        }
    }
};
