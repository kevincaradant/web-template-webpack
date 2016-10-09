import RightMenuView from './rightMenu.html';
import './rightMenu.scss';

class RightMenu {
	static detailsComponent() {
		return {
			templateUrl: RightMenuView
		};
	}
}

export default RightMenu.detailsComponent();
