exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'http://localhost:3001/',
	specs: [
    './protractor/**/*.spec.js'
  ],
	capabilities: {
		'browserName': 'chrome',

    // replace phantomjs with chrome and you'll see the fps
		'chromeOptions': {
			'args': ['show-fps-counter=true']
		}
	},

  // if you set to 'true' with chrome or firefox, protractor will communicate directly with the browser without use selenium server.
	directConnect: true,
	allScriptsTimeout: 110000,
	getPageTimeout: 100000,
	jasmineNodeOpts: {
		isVerbose: true,
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 400000
	}
};
