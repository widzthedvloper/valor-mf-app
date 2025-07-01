const HtmlWebpackPlugin = require('html-webpack-plugin');
const { withZephyr } = require("zephyr-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = withZephyr()({
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/containers/App',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^18.0.0',
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared')
    },
  },
});
