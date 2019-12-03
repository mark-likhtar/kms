const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: path.resolve(__dirname, '../node_modules'),
          name: 'vendor',
          enforce: true,
          filename: 'vendor.bundle.js'
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/static/images'
        }
      },
      {
        test: /\.(mov|mp4)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/static/media'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|ttc)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/static/fonts'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src')
    },
    modules: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')]
  }
};
