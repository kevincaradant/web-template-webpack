// Import angular
import 'angular';
// Animation
import angularAnimate from 'angular-animate';

// Router
import angularUIRouter from 'angular-ui-router';

import angularSanitize from 'angular-sanitize';

import angularTranslate from 'angular-translate';

import angularLoadingBar from 'angular-loading-bar';

import angularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';

import angularUiRouterAnimInOut from 'angular-ui-router-anim-in-out';

import ngRedux from 'ng-redux';

import angularAria from 'angular-aria';

import angularMaterial from 'angular-material';

// import ngWebworker from 'ng-webworker/src/ng-webworker';

// import rx from 'rx/dist/rx.all.min';

// import rxAngular from 'rx-angular';

// Our modules
import jsonfr from './languages/fr'; // eslint-disable-line no-unused-vars
import jsonen from './languages/en'; // eslint-disable-line no-unused-vars
import page1 from './components/page1/page1.module';
import page2 from './components/page2/page2.module';
import page3 from './components/page3/page3.module';
import home from './components/home/home.module';
import MainController from './index.controller';
import LangController from './shared/lang.controller';
import routes from './index.routes.js';

// redux actions to build as factories
import {LangActionsFactory} from './actions/lang.actions';
import {GeneralActionsFactory} from './actions/general.actions';

// project specific style
// require('font-awesome/css/font-awesome.css');
import './scss/style.scss';

// create our app module
export const demoModule = angular.module('demo', [
	angularAnimate,
	angularUIRouter,
	angularSanitize,
	angularTranslate,
	angularTranslateLoaderStaticFiles,
	angularUiRouterAnimInOut,
	angularLoadingBar,
	angularAria,
	angularMaterial,
	ngRedux,
	page1,
	page2,
	page3,
	home
]);

demoModule.config(routes);
demoModule.factory('langActionsFactory', LangActionsFactory);
demoModule.factory('generalActionsFactory', GeneralActionsFactory);
demoModule.controller('mainController', MainController);
demoModule.controller('langController', LangController);
