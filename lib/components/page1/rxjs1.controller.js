class Rxjs1Controller {
	constructor(rxjsFactory) {
		'ngInject';
		this.name = 'World';
		this.rxjsFactory = rxjsFactory;
		this.rxjsFactory.rxjsFactory$.subscribe(function (users) {
			this.users = users;
		});
		this.rxjsFactory.getUsers();
	}

	addUser() {
		this.rxjsFactory.addUser();
	}
}
export default Rxjs1Controller;
