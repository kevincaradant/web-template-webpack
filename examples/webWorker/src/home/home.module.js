import HomeConfig from './home.config';
import HomeController from './home.controller';
import './home.scss';

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.controller('homeController', HomeController);

export default homeModule = homeModule.name;
