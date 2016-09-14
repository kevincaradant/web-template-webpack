class MainController {
	constructor($location) {
		'ngInject';
		this.$location = $location;
	}

	isActive(viewLocation) {
		return this.$location.path().indexOf(viewLocation) > -1;
	}
}

export default MainController;
