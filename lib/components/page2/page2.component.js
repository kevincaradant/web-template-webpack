import Page2View from './page2.html';
import './page2.scss';

class Page2 {
	static detailsComponent() {
		return {
			templateUrl: Page2View,
			controller: function () {
				this.name = 'Hello Page2';
			}
		};
	}
}

export default Page2.detailsComponent();
