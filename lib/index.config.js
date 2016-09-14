import path from 'path';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

// our reducers
import {langReducer} from './reducers/lang.reducer';
import {generalReducer} from './reducers/general.reducer';

class IndexConfig {
	// eslint-disable-next-line max-params
	static config($translateProvider, $compileProvider, $httpProvider, $urlRouterProvider, $ngReduxProvider) {
		'ngInject';

		$compileProvider.debugInfoEnabled(true);

		$httpProvider.defaults.cache = true;

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

		// combine reducers into a store for redux
		let reducer = combineReducers({
			generalReducer,
			langReducer
		});

		// create the store with combined reducers and middlewares
		$ngReduxProvider.createStoreWith(reducer, [thunk]);
	}
}

export default IndexConfig.config;
