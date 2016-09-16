import path from 'path';
import index from 'index.html';
import rightMenu from 'components/rightMenu/rightMenu.html';

export default function routes($stateProvider, $translateProvider, $compileProvider, $httpProvider, $urlRouterProvider) {
	'ngInject';
	$compileProvider.debugInfoEnabled(true);

	$httpProvider.defaults.cache = true;

	$stateProvider
	.state('main', {
		url: '/',
		abstract: true,
		views: {
			mainView: {
				templateUrl: index
			},
			rightMenuView: {
				templateUrl: rightMenu,
				controller: 'rightMenuController as right'
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
