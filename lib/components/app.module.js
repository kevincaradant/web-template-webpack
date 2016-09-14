import AppConfig from './app.config';
import AppComponent from './app.component';
import HelloComponent from './hello.component';
import angularUIRouter from 'angular-ui-router';

let appModule = angular.module('demo.app', [angularUIRouter]);

appModule.config(AppConfig);
appModule.component('app', AppComponent);
appModule.component('hello', HelloComponent);

export default appModule = appModule.name;
