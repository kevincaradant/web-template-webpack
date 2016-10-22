import demo from '../../index.js';
import LangController from './lang.controller';

describe('lang', () => {
	describe('LangCtrl', () => {
		let service;
		let ctrl;
		let scope;

		beforeEach(() => {
			angular.mock.module(demo);

			angular.mock.inject(($controller, $rootScope, _langServiceRx_) => {
				scope = $rootScope.$new();
				service = _langServiceRx_;
				ctrl = $controller(LangController, {$scope: scope});
				spyOn(ctrl.$state, 'go'); // eslint-disable-line no-undef
			});
		});

		it('langService should be initialized', () => {
			expect(ctrl.langServiceRx).toBe(service);
		});

		it('lang should be null', () => {
			expect(ctrl.lang).toBe(null);
		});

		it('$scope should be defined', () => {
			expect(ctrl.$scope).toBeDefined();
		});

		it('$location should be defined', () => {
			expect(ctrl.$location).toBeDefined();
		});

		it('$state should be defined', () => {
			expect(ctrl.$state).toBeDefined();
		});

		it('$translate should be defined', () => {
			expect(ctrl.$translate).toBeDefined();
		});

		it('getLanguage() should returned undefined', () => {
			ctrl.changeLanguageTo('en');
			expect(ctrl.getLanguage()).toBe(undefined);
		});

		it('changeLanguageTo should changed the lang', () => {
			ctrl.changeLanguageTo('en');
			expect(ctrl.lang).toBe('en');
			expect(ctrl.$state.go).toHaveBeenCalled();
			expect(ctrl.$state.go).toHaveBeenCalledWith('');
		});
	});
});
