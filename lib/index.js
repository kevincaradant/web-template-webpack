// Project specific style
import 'scss/style';

// Import angular and angular-messages
import 'angular';
import 'angular-messages';

// Animation
import angularAnimate from 'angular-animate';

// Router
import angularUIRouter from 'angular-ui-router';

// Angular and RX
import angularUIBootstrap from 'angular-ui-bootstrap';

import angularBootstrapMaterial from 'angular-bootstrap-material/dist/angular-bootstrap-material'; // eslint-disable-line no-unused-vars

import angularSanitize from 'angular-sanitize';

import angularTranslate from 'angular-translate';

import angularLoadingBar from 'angular-loading-bar';

import angularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';

import angularUiRouterAnimInOut from 'angular-ui-router-anim-in-out';

import rx from 'rx-angular'; // eslint-disable-line no-unused-vars

// Our modules
import jsonfr from 'languages/fr'; // eslint-disable-line no-unused-vars
import jsonen from 'languages/en'; // eslint-disable-line no-unused-vars
import App from 'components/app/app.component';
import LangService from 'components/lang/lang.service';
import LangComponent from 'components/lang/lang.component';
import HomeComponent from 'components/home/home.component';
import P1Component from 'components/page1/page1.component';
import P2Component from 'components/page2/page2.component';
import RightMenuComponent from 'components/rightMenu/rightMenu.component';
import CompleteBlock from 'components/completeBlock/completeBlock.component';
import Routes from 'index.config';

// Import images
import img from 'img/image.jpg'; // eslint-disable-line no-unused-vars

const DEMOMODULE = 'demo';

angular.module(DEMOMODULE, [
	angularAnimate,
	angularUIRouter,
	angularUIBootstrap,
	'angularBootstrapMaterial',
	angularSanitize,
	angularTranslate,
	angularTranslateLoaderStaticFiles,
	angularUiRouterAnimInOut,
	angularLoadingBar,
	'rx'
])
.config(Routes)
.component('app', App)
.service('langServiceRx', LangService)
.component('lang', LangComponent)
.component('home', HomeComponent)
.component('page1', P1Component)
.component('page2', P2Component)
.component('rightMenu', RightMenuComponent)
.component('completeBlock', CompleteBlock);

export default DEMOMODULE;
