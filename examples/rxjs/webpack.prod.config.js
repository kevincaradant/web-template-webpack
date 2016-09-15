var path = require('path'),
webpack = require('webpack'),
libPath = path.join(__dirname, 'src'),
distPath = path.join(__dirname, 'dist'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
os = require('os'),
ProgressBarPlugin = require('progress-bar-webpack-plugin'), // To be delete when webpack will accept the flag --progress in the devserver and not only in CMD
ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin('[name]-[hash].css');

var cf = {
	entry: path.join(libPath, 'index.js'),
	output: {
		path: path.join(distPath),
		filename: 'bundle-[hash:6].js'
	},
	debug: false,
	resolveLoader: { root: path.join(__dirname, 'node_modules') },
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'ngtemplate!html'
			},
			{
				test: /\.scss$|\.css$/,
				loader: extractCSS.extract(['css-loader', 'resolve-url', 'sass?sourceMap'])
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff&&name=src/font/[name]-[hash].[ext]'
			},
			{
				test: /\.ttf$|\.eot$|\.wav$|\.svg$/,
				loader: "file?name=src/font/[name]-[hash].[ext]"
			},
			{
				test: /\.json$/,
				loaders: ["raw-loader", "file?name=src/languages/[name].[ext]"]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['ng-annotate?add=true&map=false', 'babel-loader']
			}
		]
	},

	plugins: [
		// HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles : https://www.npmjs.com/package/html-webpack-plugin
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			title: 'MY_CUSTOM_APP',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			},
			template: path.join(libPath, 'index.html')
		}),

		// Deduplication: find duplicate dependencies & prevents duplicate inclusion : https://github.com/webpack/docs/wiki/optimization#deduplication
		new webpack.optimize.DedupePlugin(),

		// OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
		new webpack.optimize.OccurenceOrderPlugin(),

		// a faire uniquement en prod
		new webpack.optimize.UglifyJsPlugin ({
			sourceMap: false,
			minimize: true,
			comments: false,
			compressor: {
				warnings: false
			}
		}),

		new webpack.optimize.AggressiveMergingPlugin(),

		extractCSS,

		new ProgressBarPlugin({format: '  build [:bar] ' + (':percent') + ' (:elapsed seconds)'})
	]
};

module.exports = cf;
