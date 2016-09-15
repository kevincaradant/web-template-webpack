var path = require('path'),
webpack = require('webpack'),
libPath = path.join(__dirname, 'lib'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ProgressBarPlugin = require('progress-bar-webpack-plugin'), // To be delete when webpack will accept the flag --progress in the devserver and not only in CMD
sassLintPlugin = require('sasslint-webpack-plugin');
var cf = {

	entry: path.join(libPath, 'index.js'),

	devtool: 'source-map',
	debug: true,
	cache: false,
	module: {
		loaders: [{
			test: /\.json$/,
			loaders: ["raw-loader"]
		},{
			test: /\.html$/,
			loader: 'ngtemplate!html'
		},{
			test: /\.(jpe?g|gif|png|svg|woff|woff2|ttf|eot|wav|mp3)$/,
			loader: 'file' // inline base64 URLs for <=10kb images, direct URLs for the rest
		},{
			test: /\.less$/,
			loaders: ['style', 'css', 'less?sourceMap', 'resolve-url']
		},{
			test: /\.scss$|\.css$/,
			loaders: ['style', 'css-loader', 'resolve-url', 'sass?sourceMap']
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['ng-annotate?add=true&map=true', 'babel', 'eslint-loader']
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
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			title: 'MY_CUSTOM_APP',
			template: path.join(libPath, 'index.html')
		}),

		new webpack.optimize.OccurenceOrderPlugin(),

		new webpack.optimize.DedupePlugin(),

		new webpack.HotModuleReplacementPlugin(),

		new sassLintPlugin({
			glob: 'lib/**/*.s?(a|c)ss',
			configFile: '.sass-lint.yml'
		}),

		new ProgressBarPlugin({format: '  build [:bar] ' + (':percent') + ' (:elapsed seconds)'})

	]
};

module.exports = cf;
