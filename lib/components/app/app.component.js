import AppView from './app.html';
import AppController from './app.controller';

class App {
	static detailsComponent() {
		return {
			templateUrl: AppView,
			controller: AppController
		};
	}
}

export default App.detailsComponent();
