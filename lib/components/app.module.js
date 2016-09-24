// external libs
import angularUIRouter from 'angular-ui-router';

// config and routes
import AppConfig from './app.config';

// components
import AppComponent from './app.component';
import LanguageComponent from './language/language.component';
import HelloComponent from './hello.component';

// factories

// redux actions (created as factories)
import {LangActionsFactory} from '../actions/lang.actions';
import {GeneralActionsFactory} from '../actions/general.actions';

// --------------------------------------------------------------

let appModule = angular.module('demo.app', [angularUIRouter]);

// config
appModule.config(AppConfig);

// components
appModule.component('app', AppComponent);
appModule.component('language', LanguageComponent);
appModule.component('hello', HelloComponent);

// factories

// redux actions (created as factories)
appModule.factory('langActionsFactory', LangActionsFactory);
appModule.factory('generalActionsFactory', GeneralActionsFactory);

export default appModule = appModule.name;
