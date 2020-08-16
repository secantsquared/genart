const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './public/favicon.ico'
    }),
    new CleanWebpackPlugin()
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [],
        loader: 'babel-loader'
      },
      {
        test: /.css$/,

        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-maps',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
