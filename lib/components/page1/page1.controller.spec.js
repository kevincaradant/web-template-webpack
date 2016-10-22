import demo from '../../index.js';

describe('page1', () => {
	describe('Page1Ctrl', () => {
		let ctrl;
		let scope;

		beforeEach(() => {
			angular.mock.module(demo);
			angular.mock.inject(($rootScope, $componentController) => {
				scope = $rootScope.$new();
				ctrl = $componentController('page1', {$scope: scope});
			});
		});

		it('name should have a value', () => {
			expect(ctrl.name).toBeDefined();
			expect(ctrl.name).toBe('Hello Page1');
		});
	});
});
