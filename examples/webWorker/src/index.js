// Project specific style
import './scss/style.scss';

// Import angular
import 'angular';

// import rx from 'rx/dist/rx.all.min';
// Animation
import angularAnimate from 'angular-animate';

// Router
import angularUIRouter from 'angular-ui-router';

import angularUIBootstrap from 'angular-ui-bootstrap';

import angularSanitize from 'angular-sanitize';

import angularTranslate from 'angular-translate';

import angularLoadingBar from 'angular-loading-bar';

import angularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';

import angularUiRouterAnimInOut from 'angular-ui-router-anim-in-out';

import ngWebworker from 'ng-webworker/src/ng-webworker'; // eslint-disable-line no-unused-vars

// Our modules
import jsonfr from './languages/fr'; // eslint-disable-line no-unused-vars
import jsonen from './languages/en'; // eslint-disable-line no-unused-vars
import home from './home/home.module';
import LangFactory from './shared/lang.factory';
import MainController from './index.controller';
import LangController from './shared/lang.controller';
import routes from './index.config.js';

// Create our app module
export const demoModule = angular.module('demo', [
	angularAnimate,
	angularUIRouter,
	angularUIBootstrap,
	angularSanitize,
	angularTranslate,
	angularTranslateLoaderStaticFiles,
	angularUiRouterAnimInOut,
	angularLoadingBar,
	home,
	'ngWebworker'
]);

demoModule.config(routes);
demoModule.factory('langFactory', LangFactory);
demoModule.controller('mainController', MainController);
demoModule.controller('langController', LangController);
