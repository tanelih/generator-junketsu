process.env.NODE_ENV = 'development'

const path              = require('path')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-redux',
    ],
    app: 'index.ts',
  },
  output: {
    path:     path.resolve('build'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new ExtractTextPlugin('app.bundle.css', {
      disable:   true,
      allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  resolve: {
    root: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.sass'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts-loader']
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader?indentedSyntax=true'
        ),
      },
    ],
  },
  postcss() {
    return [
      require('autoprefixer'),
      require('postcss-font-magician'),
    ]
  },
}
