class RxjsService {
	constructor(rx) {
		'ngInject';
		this.rx = rx;
		// this.rxjsFactoryObserver = rxjsFactoryObserver;
		console.log(this.rx); // it's undefined
		this.rxjsFactory$ = new this.rx.Observable.Create(observer => {
			this.rxjsFactoryObserver = observer;
		}).share();
		this.data = {
			users: [
				{name: 'John Rambo', isVisible: true, age: 32},
				{name: 'Pablo Picasso', isVisible: true, age: 64}
			]
		};
	}

	getUsers() {
		this.rxjsFactoryObserver.next(this.data.users);
	}

	addUser() {
		this.data.users.push({name: 'John Kennedy', isVisible: true, age: 87});
		this.rxjsFactoryObserver.next(this.data.users);
	}

	static rxjsFactory() {
		return new RxjsService();
	}
}

export default RxjsService.rxjsFactory;
