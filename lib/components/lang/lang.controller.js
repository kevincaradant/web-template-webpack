class LangController {
	constructor($scope, $location, $state, $translate, langServiceRx) {
		'ngInject';
		this.langServiceRx = langServiceRx;
		this.langServiceRx.langServiceRx$.subscribe(answer => {
			this.lang = answer.lang;
			this.navCollapsed = answer.navCollapsed;
		});
		this.langServiceRx.getLang();
		this.langServiceRx.getNavCollapse();
		this.$scope = $scope;
		this.$location = $location;
		this.$state = $state;
		this.$translate = $translate;
	}

	changeLanguageTo(lang) {
		this.$translate.use(lang);

		this.langServiceRx.setLang(lang);
		this.$state.go(this.$state.current.name);

		this.langServiceRx.getNavCollapse();
	}

	getLanguage() {
		return this.$translate.use();
	}
}

export default LangController;
