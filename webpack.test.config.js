'use strict';

// Modules
var webpack = require('webpack');
var path = require('path');
var config = {

	entry : {},

	devtool : 'inline-source-map',

	resolve : {
		root: [path.resolve(__dirname, 'lib'), path.resolve(__dirname, 'node_modules')],
		extensions: ['', '.js', '.json', '.scss']
	},

	module : {
		preLoaders: [{
			test: /\.js$/,
			exclude: [
				/node_modules/,
				/\.spec\.js$/
			],
			loader: 'isparta-loader'
		}],
		loaders: [{
			test: /\.json$/,
			exclude: /node_modules/,
			loaders: ["raw-loader"]
		},{
			test: /\.html$/,
			exclude: /node_modules/,
			loader: 'ngtemplate!html'
		},{
			test: /\.(jpe?g|gif|png|svg|woff|woff2|ttf|eot|wav|mp3)$/,
			loader: 'file' // inline base64 URLs for <=10kb images, direct URLs for the rest
		},{
			test: /\.less$/,
			exclude: /node_modules/,
			loaders: ['style', 'css', 'less?sourceMap', 'resolve-url']
		},{
			test: /\.scss$|\.css$/,
			exclude: /node_modules/,
			loaders: ['style', 'css-loader', 'resolve-url', 'sass?sourceMap']
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel']
		}]
	},

	plugins : [],

	devServer : {
		contentBase: './lib/img',
		stats: 'minimal'
	},
};

module.exports = config;
