import Page3 from './page3.html';
import RightMenu from '../rightMenu/rightMenu.html';

class Page3Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page3', {
			url: '/page3',
			views: {
				mainView: {
					templateUrl: Page3,
					controller: 'page3Controller as page3'
				},
				rightMenuView: {
					templateUrl: RightMenu,
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page3Config.initRoute;
