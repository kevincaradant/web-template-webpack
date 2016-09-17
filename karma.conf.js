var webpack = require("webpack");
var path = require("path");
module.exports = function(config) {
	config.set({
		files: [
			'./tests.webpack.js'
		],

		preprocessors: { './tests.webpack.js': ['webpack'] },

		// frameworks to use
		frameworks: ['chai', 'mocha'],

		reporters: ['spec'],

		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},

		webpack: {
			// webpack configuration
			module: {
				preLoaders: [
					{
						test: /\.js$/,
						exclude: [
							path.resolve('node_modules/')
						],
						loader: 'babel'
					}
				],
			},
			resolve: {
				modulesDirectories: [
					"",
					"lib",
					"node_modules"
				]
			}
		},

		webpackMiddleware: {
			// webpack-dev-middleware configuration
			noInfo: true
		},

		plugins: [
			require("karma-webpack"),
			require("istanbul-instrumenter-loader"),
			require("karma-mocha"),
			require("karma-coverage"),
			require("karma-phantomjs-launcher"),
			require("karma-spec-reporter"),
			require("karma-chai-plugins")
		],

		browsers: ['PhantomJS']
	});
};
