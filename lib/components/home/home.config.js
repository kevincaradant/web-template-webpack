import Home from './home.html';
import RightMenu from '../rightMenu/rightMenu.html';

class HomeConfig {
	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('home', {
			url: '/home',
			views: {
				mainView: {
					templateUrl: Home,
					controller: 'homeController as home'
				},
				rightMenuView: {
					templateUrl: RightMenu,
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default HomeConfig.initRoute;
