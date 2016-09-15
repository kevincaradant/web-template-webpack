var path = require('path'),
webpack = require('webpack'),
libPath = path.join(__dirname, 'src'),
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
			loaders: ["raw-loader"]
		},
		{
			test: /\.(jpe?g|gif|png|svg|woff|woff2|ttf|eot|wav|mp3)$/,
			loader: 'file' // inline base64 URLs for <=10kb images, direct URLs for the rest
		},
		{
			test: /\.html$/,
			loader: 'ngtemplate!html'
		},
		{
			test: /\.scss$|\.css$/,
			loaders: ['style', 'css-loader', 'resolve-url', 'sass?sourceMap']
		},{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loaders: ['ng-annotate?add=true&map=true', 'babel', 'eslint-loader']
		}]
	},

	eslint: {
		configFile: './.eslintrc'
	},

	devServer: {
		port: 3003,
		https: false,
		inline: true,
		compress: true,
		hot: false,
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

		new ProgressBarPlugin({format: '  build [:bar] ' + (':percent') + ' (:elapsed seconds)'})
	]
};

module.exports = cf;
