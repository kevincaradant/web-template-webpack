import path from 'path';
import {combineReducers} from 'redux';
import {langReducer} from './reducers/lang.reducer';
import {generalReducer} from './reducers/general.reducer';
import thunk from 'redux-thunk';

routes.$inject = ['$stateProvider', '$translateProvider', '$compileProvider', '$httpProvider', '$urlRouterProvider', '$ngReduxProvider'];

export default function routes($stateProvider, $translateProvider, $compileProvider, $httpProvider, $urlRouterProvider, $ngReduxProvider) {
	$compileProvider.debugInfoEnabled(true);

	$httpProvider.defaults.cache = true;

	$stateProvider
	.state('main', {
		url: '/',
		abstract: true,
		views: {
			mainView: {
				templateUrl: require('./index.html')
			},
			rightMenuView: {
				templateUrl: require('./components/rightMenu/rightMenu.html'),
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

	// create store for redux
	let reducer = combineReducers({generalReducer, langReducer});
	$ngReduxProvider.createStoreWith(reducer, [thunk]);
}
