class HomeConfig {
	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('home', {
			url: '/home',
			views: {
				mainView: {
					templateUrl: require('./home.html'),
					controller: 'homeController as home'
				},
				rightMenuView: {
					templateUrl: require('../rightMenu/rightMenu.html'),
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default HomeConfig.initRoute;
