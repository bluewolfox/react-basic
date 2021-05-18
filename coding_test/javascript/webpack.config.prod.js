const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'production',
  optimization: {
    splitChunks: { chunks: 'all', minSize: 3000 },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'img' } }],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              root: path.join(__dirname, 'src'),
              absolute: true,
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }), // css 파일 생성(link rel 방식) 밑의 HtmlWebpackPlugin 이 자동으로 임포트
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'build/**/*')],
    }),
  ],
};
