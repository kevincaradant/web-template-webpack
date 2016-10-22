class LangService {
	constructor(rx) {
		'ngInject';
		this.rx = rx;
		this.langServiceRxObserver = null;

		this.langServiceRx$ = new this.rx.Observable.create(observer => { // eslint-disable-line new-cap
			this.langServiceRxObserver = observer;
		}).share();

		this.data = {
			lang: null,
			navCollapsed: true
		};
	}

	getLang() {
		this.langServiceRxObserver.next(this.data);
	}

	setLang(lang) {
		this.data.lang = lang;
		this.langServiceRxObserver.next(this.data);
	}

	getNavCollapse() {
		this.langServiceRxObserver.next(this.data);
	}

	setNavCollapse(state) {
		this.data.navCollapsed = state;
		this.langServiceRxObserver.next(this.data);
	}
}

export default LangService;
