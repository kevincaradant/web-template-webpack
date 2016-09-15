import CompleteBlock from './completeBlock.html';
import './completeBlock.scss';

class CompleteBlock {
	static detailsComponent() {
		return {
			templateUrl: CompleteBlock,
			bindings: {
				headerImg: '@',
				headerTitle: '@',
				headerPicto: '@',
				headerColor: '@',
				headerBackgroundColor: '@',
				bodyBackgroundColor: '@',
				bodyTitle: '@',
				bodyText: '@'
			}
		};
	}
}

export default CompleteBlock.detailsComponent();
