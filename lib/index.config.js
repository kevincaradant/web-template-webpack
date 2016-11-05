import path from 'path';

export default function routes($ocLazyLoadProvider, $stateProvider, $translateProvider, $compileProvider, $httpProvider, $urlRouterProvider) {
	'ngInject';
	$compileProvider.debugInfoEnabled(true);

	$httpProvider.defaults.cache = true;

	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			mainView: {
				component: 'home'
			},
			rightMenuView: {
				component: 'rightMenu'
			}
		}
	})

	.state('page1', {
		url: '/page1',
		views: {
			mainView: {
				templateProvider: ($q) => {
					return $q((resolve) => {
						// lazy load the view
						require.ensure([], () => resolve(require("./components/page1/page1.html")));
					});
				},
				controller: function () {
					this.name = 'Hello Page1';
				}
			},
			rightMenuView: {
				templateProvider: ($q) => {
					return $q((resolve) => {
						// lazy load the view
						require.ensure([], () => resolve(require("./components/rightMenu/rightMenu.html")));
					});
				}
			}
		},
		resolve: {
			loadPage1Component: ($q, $ocLazyLoad) => {
				return $q((resolve) => {
					require.ensure([], () => {
						// load whole module
						let module = require('./components/page1/page1.module');
						$ocLazyLoad.load({name: 'page1'});
						resolve(module.component);
					});
				});
			}
		}
	})

	.state('page2', {
		url: '/page2',
		views: {
			mainView: {
				component: 'page2'
			},
			rightMenuView: {
				component: 'rightMenu'
			}
		}
	});

	$urlRouterProvider.otherwise('/home');

	let languages = ['en', 'fr'];

	// load languages from json files (when needed)
	$translateProvider.useStaticFilesLoader({
		prefix: path.join(__dirname, 'lib/languages/'),
		suffix: '.json'
	});

	// handle multiple locales for one language
	$translateProvider.registerAvailableLanguageKeys(languages, {
		'en_*': 'en',
		'fr_*': 'fr'
	});

	// define sanitize strategy and prefered language
	$translateProvider.useSanitizeValueStrategy('escape');
	$translateProvider.determinePreferredLanguage();
}
