import 'angular';
import 'angular-mocks/angular-mocks';

const context = require.context('./lib', true, /\.js$/);

context.keys().forEach(context);
