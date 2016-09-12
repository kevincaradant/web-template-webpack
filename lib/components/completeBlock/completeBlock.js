import CompleteBlockController from './completeBlock.controller';
import completeBlock from './completeBlock.html';
import './completeBlock.scss';

class CompleteBlock {
	static detailsComponent() {
		return {
			templateUrl: completeBlock,
			controller: CompleteBlockController,
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
