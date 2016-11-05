// Project specific style
import 'scss/style';

// Import angular and angular-messages
import 'angular';
import 'angular-messages';
import angularAnimate from 'angular-animate';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularBootstrapMaterial from 'angular-bootstrap-material/dist/angular-bootstrap-material'; // eslint-disable-line no-unused-vars
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';
import angularLoadingBar from 'angular-loading-bar';
import angularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
import angularUiRouterAnimInOut from 'angular-ui-router-anim-in-out';
import rx from 'rx-angular'; // eslint-disable-line no-unused-vars

// Import Lazyload
import ocLazyLoad from 'oclazyload'; // eslint-disable-line no-unused-vars

// Our languages files
import jsonfr from 'languages/fr'; // eslint-disable-line no-unused-vars
import jsonen from 'languages/en'; // eslint-disable-line no-unused-vars

// Our modules
import home from 'components/home/home.module';

// Our components
import RightMenuComponent from 'components/rightMenu/rightMenu.component';
import App from 'components/app/app.component';
import LangComponent from 'components/lang/lang.component';

// our Services
import LangService from 'components/lang/lang.service';

// Our Router
import Routes from 'index.config';

const DEMOMODULE = 'demo';

angular.module(DEMOMODULE, [
	ocLazyLoad,
	angularAnimate,
	angularUIRouter,
	angularUIBootstrap,
	'angularBootstrapMaterial',
	angularSanitize,
	angularTranslate,
	angularTranslateLoaderStaticFiles,
	angularUiRouterAnimInOut,
	angularLoadingBar,
	'rx',
	home
])
.config(Routes)
.component('app', App)
.service('langServiceRx', LangService)
.component('lang', LangComponent)
.component('rightMenu', RightMenuComponent);

export default DEMOMODULE;
