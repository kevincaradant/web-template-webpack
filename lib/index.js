import 'angular';
import angularAnimate from 'angular-animate';
import angularUIRouter from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';
import angularLoadingBar from 'angular-loading-bar';
import angularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
import ngRedux from 'ng-redux';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';

// our modules
// eslint-disable-next-line no-unused-vars
import langFr from './languages/fr';
// eslint-disable-next-line no-unused-vars
import langEn from './languages/en';
import IndexConfig from './index.config';
import appModule from './components/app.module';

// our redux actions to build as factories
// import {LangActionsFactory} from './actions/lang.actions';
// import {GeneralActionsFactory} from './actions/general.actions';

// project specific style
import './scss/style.scss';

// create our app module
export const demoModule = angular.module('demo', [
	// external modules
	angularAnimate,
	angularUIRouter,
	angularSanitize,
	angularTranslate,
	angularTranslateLoaderStaticFiles,
	angularLoadingBar,
	angularAria,
	angularMaterial,
	ngRedux,

	// our module
	appModule
]);

demoModule.config(IndexConfig);
// demoModule.factory('langActionsFactory', LangActionsFactory);
// demoModule.factory('generalActionsFactory', GeneralActionsFactory);
