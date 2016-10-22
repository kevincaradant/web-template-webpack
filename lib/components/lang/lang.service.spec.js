import demo from '../../index.js';

describe('lang', () => {
	describe('LangCtrl', () => {
		let service;

		beforeEach(() => {
			angular.mock.module(demo);
		});

		it('rx should be initialized', (inject(langServiceRx => {
			expect(langServiceRx.rx).toBeDefined();
		})));

		it('data should be initialized', (inject(langServiceRx => {
			expect(langServiceRx.data).toBeDefined();
			expect(langServiceRx.data).toEqual({lang: null, navCollapsed: true});
		})));

		it('getLang() should get data object', (inject(langServiceRx => {
			expect(langServiceRx.data.lang).toBe(null);
		})));
	});
});
