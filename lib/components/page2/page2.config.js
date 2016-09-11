class Page2Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page2', {
			url: '/page2',
			views: {
				mainView: {
					templateUrl: require('./page2.html'),
					controller: 'page2Controller as page2'
				},
				rightMenuView: {
					templateUrl: require('../rightMenu/rightMenu.html'),
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page2Config.initRoute;
