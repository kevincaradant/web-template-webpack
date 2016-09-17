import path from 'path';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// our reducers
import rootReducer from './reducers';

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

		$ngReduxProvider.createStoreWith(rootReducer, [thunkMiddleware]);

		const createStoreWithMiddleware = applyMiddleware(
			thunkMiddleware
		)(createStore);

		// create the store with combined reducers and middlewares
		const store = createStoreWithMiddleware(rootReducer);

		if (module.hot) {
			module.hot.accept('./reducers', () => {
				const nextRootReducer = require('./reducers');
				store.replaceReducer(nextRootReducer);
			});
		}
	}
}

export default IndexConfig.config;
