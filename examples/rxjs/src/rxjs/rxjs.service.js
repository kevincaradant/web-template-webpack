class RxjsService {
	constructor(rx) {
		'ngInject';
		this.rx = rx;
		this.rxjsServiceObserver = null;
		this.rxjsService$ = new this.rx.Observable.create(observer => {
			this.rxjsServiceObserver = observer;
		}).share();
		this.data = {
			users: [
				{name: 'John Rambo', isVisible: true, age: 32},
				{name: 'Pablo Picasso', isVisible: true, age: 64}
			]
		};
	}

	getUsers() {
		this.rxjsServiceObserver.next(this.data.users);
	}

	addUser() {
		this.data.users.push({name: 'John Kennedy', isVisible: true, age: 87});
		this.rxjsServiceObserver.next(this.data.users);
	}
}

export default RxjsService;
