import Image from '../../img/image.jpg'; // eslint-disable-line no-unused-vars
import RightMenuController from '../rightMenu/rightMenu.controller';
import CompleteBlock from '../completeBlock/completeBlock';
import HomeController from './home.controller';
import HomeConfig from './home.config';
import './home.scss';

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.controller('homeController', HomeController);
homeModule.controller('rightMenuController', RightMenuController);
homeModule.component('completeBlock', CompleteBlock);

export default homeModule = homeModule.name;
