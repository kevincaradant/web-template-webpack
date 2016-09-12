import page1 from './page1.html';
import rightMenu from '../rightMenu/rightMenu.html';

class Page1Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page1', {
			url: '/page1',
			views: {
				mainView: {
					templateUrl: page1,
					controller: 'page1Controller as page1'
				},
				rightMenuView: {
					templateUrl: rightMenu,
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page1Config.initRoute;
