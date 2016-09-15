import Page2 from './page2.html';
import RightMenu from '../rightMenu/rightMenu.html';

class Page2Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page2', {
			url: '/page2',
			views: {
				mainView: {
					templateUrl: Page2,
					controller: 'page2Controller as page2'
				},
				rightMenuView: {
					templateUrl: RightMenu,
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page2Config.initRoute;
