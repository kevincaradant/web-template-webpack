class LangController {
	constructor($scope, $location, $state, $translate, langFactory) {
		this.$scope = $scope;
		this.$location = $location;
		this.$state = $state;
		this.$translate = $translate;
		this.langFactory = langFactory;
		this.$scope.$on('$stateChangeStart', this.onStateChange());
	}

	changeLanguageTo(lang) {
		this.$translate.use(lang);

		this.langFactory.setLang(lang);

		this.$state.go(this.$state.current.name);

		this.$scope.navCollapsed = !this.$scope.navCollapsed;
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
LangController.$inject = ['$scope', '$location', '$state', '$translate', 'langFactory'];

export default LangController;
