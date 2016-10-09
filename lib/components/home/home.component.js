import HomeView from './home.html';
import './home.scss';

class Home {
	static detailsComponent() {
		return {
			templateUrl: HomeView
		};
	}
}

export default Home.detailsComponent();
