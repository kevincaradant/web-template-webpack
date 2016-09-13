class LangController {
	constructor($scope, $ngRedux, langActionsFactory, generalActionsFactory) {
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
LangController.$inject = ['$scope', '$ngRedux', 'langActionsFactory', 'generalActionsFactory'];

export default LangController;
