var path = require('path');
var pkg = require('../package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = process.env.NODE_ENV === 'development';
var TEST = process.env.NODE_ENV === 'test';

var jsxLoader;
var cssLoader;
var fileLoader = 'file-loader?name=[path][name].[ext]';
var htmlLoader = [
  'file-loader?name=[path][name].[ext]',
  'template-html-loader?' + [
    'raw=true',
    'engine=lodash',
    'version=' + pkg.version,
    'title=' + pkg.name,
    'debug=' + DEBUG
  ].join('&')
].join('!');

if (DEBUG || TEST) {
  jsxLoader = [];
  if (!TEST) {
    jsxLoader.push('react-hot');
  }
  jsxLoader.push('babel-loader?optional=runtime');
  cssLoader = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader'
  ].join('!');
} else {
  jsxLoader = ['babel-loader?optional=runtime'];
  cssLoader = ExtractTextPlugin.extract('style-loader', [
    'css-loader',
    'postcss-loader'
  ].join('!'));
}

var loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loaders: jsxLoader
}, {
  test: /\.css$/,
  loader: cssLoader
}, {
  test: /\.(jpe?g|gif|png|ico|otf|eot|svg|ttf|woff2?)(\?.+|$)/,
  loader: fileLoader
}, {
  test: /\.json$/,
  exclude: /node_modules/,
  loaders: 'json-loader'
}, {
  test: /\.html$/,
  loader: htmlLoader
}, {
  test: /\.styl$/,
  loader: 'style-loader!css-loader!postcss-loader!'
}];

module.exports = loaders;
