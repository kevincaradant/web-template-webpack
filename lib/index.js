// Import angular
import 'angular';
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
import LangFactory from './shared/lang.factory';
import MainController from './index.controller';
import LangController from './shared/lang.controller';
import routes from './index.routes.js';

// Project specific style
// require('font-awesome/css/font-awesome.css');
import './scss/style.scss';

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
	page1,
	page2,
	page3,
	home
]);

demoModule.config(routes);
demoModule.factory('langFactory', LangFactory);
demoModule.controller('mainController', MainController);
demoModule.controller('langController', LangController);
