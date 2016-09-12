import page3 from './page3.html';
import rightMenu from '../rightMenu/rightMenu.html';

class Page3Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page3', {
			url: '/page3',
			views: {
				mainView: {
					templateUrl: page3,
					controller: 'page3Controller as page3'
				},
				rightMenuView: {
					templateUrl: rightMenu,
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page3Config.initRoute;
