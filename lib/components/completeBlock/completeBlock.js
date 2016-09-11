import CompleteBlockController from './completeBlock.controller';
import './completeBlock.scss';

class CompleteBlock {
	static detailsComponent() {
		return {
			templateUrl: require('./completeBlock.html'),
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
