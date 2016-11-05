// Import images
import img from 'img/image.jpg'; // eslint-disable-line no-unused-vars
import HomeComponent from 'components/home/home.component';
import CompleteBlock from 'components/completeBlock/completeBlock.component';
const HOMEMODULE = 'home';

angular.module(HOMEMODULE, [])
.component('home', HomeComponent)
.component('completeBlock', CompleteBlock);

export default HOMEMODULE;
