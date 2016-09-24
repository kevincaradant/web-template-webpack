class AppConfig {
	static config($stateProvider, $urlRouterProvider) {
		'ngInject';

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app', {
				url: '/',
				component: 'hello',
				resolve: {
					text: () => {
						return 'This is a test !!!!';
					}
				}
			});
	}
}

export default AppConfig.config;
