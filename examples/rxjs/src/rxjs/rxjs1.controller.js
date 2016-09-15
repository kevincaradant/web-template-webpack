class Rxjs1Controller {
	constructor(rxjsService) {
		'ngInject';
		this.name = 'World';
		this.rxjsService = rxjsService;
		this.rxjsService.rxjsService$.subscribe(users => {
			this.users = users;
		});
		this.rxjsService.getUsers();
	}

	addUser() {
		this.rxjsService.addUser();
	}
}
export default Rxjs1Controller;
