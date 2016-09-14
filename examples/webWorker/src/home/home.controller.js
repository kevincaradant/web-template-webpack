class HomeController {
	constructor($interval, $timeout, Webworker) {
		'ngInject';
		this.name = 'Web Worker';
		this.secFibWithWW = -1;
		this.rsltFibWithWW = -1;
		this.secFibWithoutWW = -1;
		this.rsltFibWithoutWW = -1;
		this.$interval = $interval;
		this.$timeout = $timeout;
		this.Webworker = Webworker;
		this.fibonacciIndex = 43;
	}

	changeName() {
		this.name = 'angular-tips';
	}

	fibWithWW() {
		this.secFibWithWW = 0;
		this.rsltFibWithWW = -1;

		let fibWorker = this.Webworker.create(this.fibonacci);

		let interval = this.$interval(() => {
			this.secFibWithWW++;
		}, 1000);

		fibWorker.run(this.fibonacciIndex).then(result => {
			this.$interval.cancel(interval);
			this.rsltFibWithWW = result;
		});
	}

	fibWithoutWW() {
		this.secFibWithoutWW = 0;
		this.rsltFibWithoutWW = -1;

		let secFibWithoutWW = Date.now();

		this.$timeout(() => {
			this.rsltFibWithoutWW = this.fibonacci(this.fibonacciIndex);

			this.secFibWithoutWW = Math.ceil((Date.now() - secFibWithoutWW) / 1000);
		}, 100);
	}

	fibonacci(n) {
		return n < 2 ? 1 : this.fibonacci(n - 1) + this.fibonacci(n - 2);
	}
}

export default HomeController;
