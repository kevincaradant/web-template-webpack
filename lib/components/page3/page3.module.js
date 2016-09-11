import Page3Config from './page3.config';
import Page3Controller from './page3.controller';
import './page3.scss';

let page3Module = angular.module('demo.page3', []);

page3Module.config(Page3Config);
page3Module.controller('page3Controller', Page3Controller);

export default page3Module = page3Module.name;
