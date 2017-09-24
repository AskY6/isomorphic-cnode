var webpack = require('webpack')
var path = require('path')

var outputPath = './docs/javascript'
var alias = {}
var plugins = [
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '/vendor.js',
    }),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
    })
]
var watch = true

if (process.env.NODE_ENV === 'production') {
    plugins = plugins.concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // minify JS
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
    watch = false
}

if (process.env.REACT === 'lite') {
    Object.assign(alias, {
        'react': 'react-lite',
        'react-dom': 'react-lite',
    })
    outputPath += '-lite'
}

webpackConfig = {
    watch: watch,
    // devtool: '#source-map',
    entry: {
        index: './src',
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom',
            'isomorphic-fetch',
            'relite',
            'create-app',
            'fastclick',
            'classnames',
            'querystring'
        ],
    },
    output: {
        path: outputPath,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
        postLoaders: [{
            test: /controller\.jsx?$/,
            loader: 'bundle-loader',
            query: {
                lazy: true,
                name: '[folder]',
            },
            exclude: /node_modules/,
        }]
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js'],
        root: __dirname,
        alias: alias,
    }
}


module.exports = webpackConfig