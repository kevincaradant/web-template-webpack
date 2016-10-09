import Page1View from './page1.html';
import './page1.scss';

class Page1 {
	static detailsComponent() {
		return {
			templateUrl: Page1View,
			controller: function () {
				this.name = 'Hello Page1';
			}
		};
	}
}

export default Page1.detailsComponent();
