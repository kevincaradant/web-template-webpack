import LanguageComponentCtrl from './language.controller';

class LanguageComponent {
	static component() {
		return {
			templateUrl: require('./language.html'),
			controller: LanguageComponentCtrl
		};
	}
}

export default LanguageComponent.component();
