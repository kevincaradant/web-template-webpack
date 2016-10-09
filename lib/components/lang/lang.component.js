import LangController from './lang.controller';
import LangView from './lang.html';

class Lang {
	static detailsComponent() {
		return {
			templateUrl: LangView,
			controller: LangController
		};
	}
}

export default Lang.detailsComponent();
