import home from './home.html';
import rightMenu from '../rightMenu/rightMenu.html';

class HomeConfig {
	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('home', {
			url: '/home',
			views: {
				mainView: {
					templateUrl: home,
					controller: 'homeController as home'
				},
				rightMenuView: {
					templateUrl: rightMenu,
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default HomeConfig.initRoute;
