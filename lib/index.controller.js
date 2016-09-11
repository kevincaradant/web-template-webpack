class MainController {
	constructor($location) {
		this.$location = $location;
	}

	isActive(viewLocation) {
		return this.$location.path().indexOf(viewLocation) > -1;
	}
}

MainController.$inject = ['$location'];

export default MainController;
