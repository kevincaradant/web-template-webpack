var path = require('path'),
webpack = require("webpack"),
libPath = path.join(__dirname, 'lib'),
distPath = path.join(__dirname, 'dist'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
os = require('os'),
ImageminPlugin = require('imagemin-webpack-plugin').default,
OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
webpackUglifyJsPlugin = require('webpack-uglify-js-plugin'),
ProgressBarPlugin = require('progress-bar-webpack-plugin'), // To be delete when webpack will accept the flag --progress in the devserver and not only in CMD
autoprefixer = require('autoprefixer'),
ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractCSS = new ExtractTextPlugin('[name]-[hash].css');
let extractLESS = new ExtractTextPlugin('[name]-[hash].less');

var cf = {
	entry: path.join(libPath, 'index.js'),
	output: {
		path: path.join(distPath),
		filename: 'bundle-[hash:6].js'
	},
	resolveLoader: { root: path.join(__dirname, 'node_modules') },
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'ngtemplate!html'
			},
			{
				test: /\.less$/,
				loader: extractCSS.extract(['css', 'less', 'resolve-url', 'postcss-loader'])
			},
			{
			 test: /\.scss$|\.css$/,
				loader: extractCSS.extract(['css-loader', 'resolve-url', 'postcss-loader', 'sass?sourceMap'])
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff&&name=lib/font/[name]-[hash].[ext]'
			},
			{
				test: /\.jpe?g$|\.gif$|\.png$/,
				loaders: ['file?hash=sha512&digest=hex&name=lib/img/[name].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
			},
			{
				test: /\.ttf$|\.eot$|\.wav$|\.svg$/,
				loader: "file?name=lib/font/[name]-[hash].[ext]"
			},
			{
				test: /\.json$/,
				loaders: ["raw-loader", "file?name=lib/languages/[name].[ext]"]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['ng-annotate?add=true', 'babel']
			}
		]
	},

	devServer: {
		port: 3001,
		compress:true,
		colors:true
	},

	postcss: function () {
		return [autoprefixer];
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

		new OptimizeCssAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: {removeAll: true } },
			canPrint: true
		}),

		new ImageminPlugin({
			disable: false,
			optipng: {
				optimizationLevel: 3
			},
			gifsicle: {
				optimizationLevel: 1
			},
			jpegtran: {
				progressive: false
			},
			svgo: {
			},
			pngquant: null, // pngquant is not run unless you pass options here
			plugins: []
		}),

		// a faire uniquement en prod
		new webpackUglifyJsPlugin ({
			cacheFolder: path.resolve(__dirname, 'dist/cached_uglify/'),
			sourceMap: false,
			minimize: false,
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
