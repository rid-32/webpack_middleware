import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import path from 'path'

export default {
  mode: 'development',
  resolve: {
    modules: [path.resolve(__dirname, '../app'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css'],
  },
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../app/index.js'),
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: 'url-loader',
      },
      { test: /\.json$/, use: 'json-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
}
