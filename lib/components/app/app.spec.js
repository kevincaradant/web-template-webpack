import demo from '../../index.js';
import AppController from './app.controller';

describe('app', () => {
	describe('AppCtrl', () => {
		let service;
		let ctrl;

		beforeEach(() => {
			angular.mock.module(demo);

			angular.mock.inject(($controller, _langServiceRx_) => {
				service = _langServiceRx_;
				ctrl = $controller(AppController, {});
			});
		});

		it('langService should be initialized', () => {
			expect(ctrl.langServiceRx).toBe(service);
		});

		it('lang should be null', () => {
			expect(ctrl.lang).toBe(null);
		});

		it('navCollapsed should be true', () => {
			expect(ctrl.navCollapsed).toBe(true);
		});

		it('setNavCol() should set NavCollapse to true', () => {
			ctrl.setNavCol(true);
			expect(ctrl.navCollapsed).toBe(true);
		});

		it('setNavCol() should set NavCollapse to false', () => {
			ctrl.setNavCol(false);
			expect(ctrl.navCollapsed).toBe(false);
		});
	});
});
