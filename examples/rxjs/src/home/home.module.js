import RxjsService from '../rxjs/rxjs.service';
import HomeConfig from './home.config';
import Rxjs1Controller from '../rxjs/rxjs1.controller';
import Rxjs2Controller from '../rxjs/rxjs2.controller';
import RxjsFilter from '../rxjs/rxjs.filter';

let homeModule = angular.module('demo.home', []);

homeModule.config(HomeConfig);
homeModule.controller('rxjs1Controller', Rxjs1Controller);
homeModule.controller('rxjs2Controller', Rxjs2Controller);
homeModule.service('rxjsService', RxjsService);
homeModule.filter('rxjsFilter', RxjsFilter);

export default homeModule = homeModule.name;
