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

class LanguageComponent {
	static component() {
		return {
			templateUrl: require('./language.html'),
			controller: LanguageComponentCtrl
		};
	}
}

export default LanguageComponent.component();
