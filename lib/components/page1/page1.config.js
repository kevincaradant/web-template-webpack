class Page1Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page1', {
			url: '/page1',
			views: {
				mainView: {
					templateUrl: require('./page1.html'),
					controller: 'page1Controller as page1'
				},
				rightMenuView: {
					templateUrl: require('../rightMenu/rightMenu.html'),
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page1Config.initRoute;
