class AppController {
	constructor(langServiceRx) {
		'ngInject';
		this.langServiceRx = langServiceRx;
		this.langServiceRx.langServiceRx$.subscribe(answer => {
			this.lang = answer.lang;
			this.navCollapsed = answer.navCollapsed;
		});
		this.langServiceRx.getLang();
		this.langServiceRx.getNavCollapse();
	}

	setNavCol(state) {
		this.langServiceRx.setNavCollapse(state);
	}
}

export default AppController;
