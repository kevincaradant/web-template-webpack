import home from './home.html';

class HomeConfig {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('home', {
			url: '/home',
			views: {
				mainView: {
					templateUrl: home
				}
			}
		});
	}
}

export default HomeConfig.initRoute;
