class LangService {
	constructor() {
		this.lang = null;
	}

	getLang() {
		return this.lang;
	}

	setLang(lang) {
		this.lang = lang;
	}

	static langFactory() {
		return new LangService();
	}
}

export default LangService.langFactory;
