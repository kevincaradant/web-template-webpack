import TemplateCompleteBlock from './completeBlock.html';
import './completeBlock.scss';

class CompleteBlock {
	static detailsComponent() {
		return {
			templateUrl: TemplateCompleteBlock,
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
