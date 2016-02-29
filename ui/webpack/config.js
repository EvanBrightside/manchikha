var path = require('path');
var util = require('util');
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var pkg = require('../package.json');

var loaders = require('./loaders');
var plugins = require('./plugins');

var DEBUG = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test';

var jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

var entry = {
    app: [
        (PRODUCTION ? './defines.production.js' : './defines.develop.js'),
        './app'
    ]
};

if (DEBUG) {
    entry.app.push(
        util.format(
            'webpack-dev-server/client?http://%s:%d',
            pkg.config.devHost,
            pkg.config.devPort
        )
    );
    entry.app.push('webpack/hot/dev-server');
}

var config = {
    context: path.join(__dirname, '../app'),
    cache: DEBUG,
    debug: DEBUG,
    target: 'web',
    devtool: DEBUG || TEST ? 'inline-source-map' : false,
    entry: entry,
    output: {
        path: path.resolve(pkg.config.buildDir),
        publicPath: '/',
        filename: jsBundle,
        pathinfo: false
    },
    module: {
        loaders: loaders,
        noParse: /node_modules\/quill\/dist/
    },
    postcss: function () {
        return [autoprefixer, csswring];
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
        modulesDirectories: ['node_modules', '../app', '../app/components', '../app/containers', '../app/actions', '../app/util']
    },
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://0.0.0.0:3000',
                secure: false
            }
        },
        contentBase: path.resolve(pkg.config.buildDir),
        hot: true,
        noInfo: false,
        inline: true,
        stats: { colors: true },
        historyApiFallback: true
    }
};

module.exports = config;
