module.exports = function karmaConfig (config) {
	config.set({
		frameworks: [
			'jasmine'
		],

		reporters: [
			'progress',
			'coverage'
		],

		files: [
			'tests.webpack.js'
		],

		preprocessors: {
			'tests.webpack.js': ['webpack', 'sourcemap']
		},

		browsers: [
			'PhantomJS'
		],

		autoWatch: false,
		singleRun: true,

		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{type: 'text-summary'},
				{type: 'html'}
			]
		},

		webpack: require('./webpack.test.config'),

		webpackMiddleware: {
			noInfo: 'errors-only'
		}
	});
};
