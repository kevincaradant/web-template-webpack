import demo from '../../index.js';

describe('page2', () => {
	describe('Page2Ctrl', () => {
		let ctrl;
		let scope;

		beforeEach(() => {
			angular.mock.module(demo);
			angular.mock.inject(($rootScope, $componentController) => {
				scope = $rootScope.$new();
				ctrl = $componentController('page2', {$scope: scope});
			});
		});

		it('name should have a value', () => {
			expect(ctrl.name).toBeDefined();
			expect(ctrl.name).toBe('Hello Page2');
		});
	});
});
