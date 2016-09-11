import Page2Config from './page2.config';
import Page2Controller from './page2.controller';
import './page2.scss';

let page2Module = angular.module('demo.page2', []);

page2Module.config(Page2Config);
page2Module.controller('page2Controller', Page2Controller);

export default page2Module = page2Module.name;
