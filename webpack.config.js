const path = require(`path`);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
  const config = {
    splitChunks: {
      name: 'all',
    },
  };

  if (isProd) {
    config.minimize = true;
    config.minimizer = [new TerserWebpackPlugin(), new OptimizeCssAssetsPlugin()];
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: `./index.jsx`,
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, `build`),
  },
  devServer: {
    compress: false,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new CopyPlugin({
      patterns: [
        { from: './assets/img', to: path.resolve(__dirname, `build/img`) },
        { from: './assets/photos', to: path.resolve(__dirname, `build/photos`) },
        { from: './assets/fonts', to: path.resolve(__dirname, `build/fonts`) },
        { from: './assets/css', to: path.resolve(__dirname, `build/css`) },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, `src`),
      components: path.resolve(__dirname, `src/components`),
    },
    extensions: [`.js`, `.jsx`],
  },
  optimization: optimization(),
  devtool: isDev ? 'eval-cheap-source-map' : false,
};
