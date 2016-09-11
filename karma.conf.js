var webpack = require("webpack");
module.exports = function(config) {
	config.set({
		files: [
			'lib/**/*.spec.js'
		],

		// frameworks to use
		frameworks: ['chai', 'mocha'],

		reporters: ['spec', 'coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},

		webpack: {
			// webpack configuration
			module: {
				loaders: [
					{
						test: /\.js$/,
						exclude: /(node_modules)/,
						loaders: ['babel']
					}
				],

				postLoaders: [{
					test: /\.js/,
					exclude: /(node_modules)/,
					loader: 'istanbul-instrumenter'
				}]
			},
			resolve: {
				modulesDirectories: [
					"",
					"src",
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
