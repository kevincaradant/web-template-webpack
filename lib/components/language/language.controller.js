class LanguageComponentCtrl {
	constructor($ngRedux, langActionsFactory) {
		'ngInject';

		// connect to redux store
		this.unsubscribe = $ngRedux.connect(this.mapStateToThis, Object.assign({}, langActionsFactory))(this);
	}

	mapStateToThis(state) {
		return {
			langReducer: state.langReducer
		};
	}

	$onDestroy() {
		this.unsubscribe();
	}
}

export default LanguageComponentCtrl;
