const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const CssMinimizerPlugin = require(`css-minimizer-webpack-plugin`);
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === `development`;
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: `./index.html`,
    minify: {
      collapseWhitespace: isProd
    }
  }),
  new MiniCssExtractPlugin({
    filename: `./css/${filename('css')}`,
  }),
];

module.exports = {
  context: path.resolve(__dirname, `src`),
  mode: `development`,
  entry: `./index.js`,
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, `dist`),
    publicPath: ``,
  },
  devtool: isDev ? `source-map` : false,
  devServer: {
    contentBase: path.resolve(__dirname, `dist`),
    open: true,
    hot: true,
    port: 8081,
    historyApiFallback: true,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx*$/i,
        exclude: /node_modules/,
        use: [`babel-loader`]
      },
      {
        test: /\.(c|s[ac])ss$/i,
        exclude: /\.module.(c|s[ac])ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          `css-loader`,
          `sass-loader`,
          `postcss-loader`
        ]
      },
      {
        test: /\.module.(c|s[ac])ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          {
            loader: `css-loader`,
            options: {
              importLoaders: 1,
              modules: true,
            }
          },
          `sass-loader`,
          `postcss-loader`
        ]
      },
      {
        test: /\.html$/i,
        use: [`html-loader`]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: `file-loader`,
            options: {
              outputPath: `img`
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.json']
  }
}