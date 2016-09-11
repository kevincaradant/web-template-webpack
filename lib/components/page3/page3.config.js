class Page3Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page3', {
			url: '/page3',
			views: {
				mainView: {
					templateUrl: require('./page3.html'),
					controller: 'page3Controller as page3'
				},
				rightMenuView: {
					templateUrl: require('../rightMenu/rightMenu.html'),
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page3Config.initRoute;
