import Page1 from './page1.html';
import RightMenu from 'components/rightMenu/rightMenu.html';

class Page1Config {

	static initRoute($stateProvider) {
		'ngInject';
		$stateProvider.state('page1', {
			url: '/page1',
			views: {
				mainView: {
					templateUrl: Page1,
					controller: 'page1Controller as page1'
				},
				rightMenuView: {
					templateUrl: RightMenu,
					controller: 'rightMenuController'
				}
			}
		});
	}
}

export default Page1Config.initRoute;
