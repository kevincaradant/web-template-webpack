class LangController {
	constructor($scope, $ngRedux, langActionsFactory, generalActionsFactory) {
		'ngInject';
		
		this.$scope = $scope;

		// connect to redux store
		let unsubscribe = $ngRedux.connect(this.mapStateToThis, Object.assign({}, langActionsFactory, generalActionsFactory))(this);
		this.$scope.$on('$destroy', unsubscribe);
	}

	mapStateToThis(state) {
		return {
			langReducer: state.langReducer,
			generalReducer: state.generalReducer
		};
	}
}

export default LangController;
