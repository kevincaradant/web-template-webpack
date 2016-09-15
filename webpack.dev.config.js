var path = require('path'),
webpack = require("webpack"),
libPath = path.join(__dirname, 'lib'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ProgressBarPlugin = require('progress-bar-webpack-plugin'), // To be delete when webpack will accept the flag --progress in the devserver and not only in CMD
os = require('os');

var cf = {
	entry: path.join(libPath, 'index.js'),

	devtool: 'source-map',

	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},

	module: {
		loaders: [{
			test: /\.json$/,
			exclude: /node_modules/,
			loaders: ["raw-loader"]
		},{
			test: /\.(html|jpe?g|gif|png|svg|woff|woff2|ttf|eot|wav|mp3)$/,
			// inline base64 URLs for <=10kb images, direct URLs for the rest
			// exclude: /node_modules/, is not working and should be here if a fix is found !
			loader: 'file',
		},{
			test: /\.scss$/,
			exclude: /node_modules/,
			loaders: ['style', 'css', 'sass', 'resolve-url', 'sass?sourceMap']
		},{
			test: /\.css$/,
			exclude: /node_modules/,
			loaders: ["style-loader", "css-loader"]
		},{
			test: /\.less$/,
			exclude: /node_modules/,
			loaders: ['css','less', 'resolve-url', 'less?sourceMap']
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['ng-annotate?add=true', 'babel-loader', 'eslint-loader']
		}]
	},

	eslint: {
		configFile: './.eslintrc'
	},

	devServer: {
		port: 3001,
		https: false,
		inline: true,
		compress: true,
		hot: true,
		open: true,
		color: true
	},

	plugins: [
		// HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles : https://www.npmjs.com/package/html-webpack-plugin
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			title: 'MY_CUSTOM_APP',
			template: path.join(libPath, 'index.html')
		}),

		// OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
		new webpack.optimize.OccurenceOrderPlugin(),

		// Deduplication: find duplicate dependencies & prevents duplicate inclusion : https://github.com/webpack/docs/wiki/optimization#deduplication
		new webpack.optimize.DedupePlugin(),

		new webpack.HotModuleReplacementPlugin(),

		new ProgressBarPlugin({format: '  build [:bar] ' + (':percent') + ' (:elapsed seconds)'})
	]
};

module.exports = cf;
