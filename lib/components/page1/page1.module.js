import Page1Config from './page1.config';
import Page1Controller from './page1.controller';
import './page1.scss';

let page1Module = angular.module('demo.page1', []);

page1Module.config(Page1Config);
page1Module.controller('page1Controller', Page1Controller);

export default page1Module = page1Module.name;
