class LangController {
	constructor($scope, $location, $state, $translate, langFactory) {
		'ngInject';
		this.$scope = $scope;
		this.$location = $location;
		this.$state = $state;
		this.$translate = $translate;
		this.langFactory = langFactory;
		this.$scope.$on('$stateChangeStart', this.onStateChange());
	}

	isActive(viewLocation) {
		return this.$location.path().indexOf(viewLocation) > -1;
	}

	changeLanguageTo(lang) {
		this.$translate.use(lang);

		this.langFactory.setLang(lang);

		this.$state.go(this.$state.current.name);

		this.navCollapsed = !this.navCollapsed;
	}

	getLanguage() {
		return this.$translate.use();
	}

	onStateChange() {
		return (event, toState, toParams) => {
			this.$translate.use(toParams.lang);
			this.langFactory.setLang(toParams.lang);
		};
	}
}

export default LangController;
