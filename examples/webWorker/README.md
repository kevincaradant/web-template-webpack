#WORK IN PROGRESS :)

# Why ?
If you often create new web projects, you know how long it can be to start from scratch.
You just need to kick start your project ? This repo has been made for you !

## Stack :
- [Webpack](https://webpack.github.io/docs/)
- [Angularjs](https://angularjs.org/)
- [Sass](http://sass-lang.com/)
- [Karma](http://karma-runner.github.io/)
- [Xo](http://eslint.org/) && (https://github.com/sindresorhus/xo)

## Workflow Features
- **Webpack** fully automated workflow
- **Development** and **production** environment targets
- **Unit** test samples
- **Coverage** to know if your code is tested enough
- **Sass** linting, sourcemaps minify and concat
- **Livereload** and - **Hot Reloading** to work without pressing F5 every second and to refresh only the stylesheet modified

## Main librairies into the project :
- Bootstrap
- Font-Awesome
- Angular
	- Angular-mocks
	- Angular-translate
	- Angular-sanitize
	- Angular-ui-bootstrap
	- Angular-animate
	- Angular-ui-router
- Rx

# webTemplate-webpack
A simple AngularJS 1.5 boilerplate using ES6 and components, and webpack

## Install & run
```
$ npm install --no-optional
$ npm run dev
See the browser on : `http://localhost:3001`
Or if you prefer to have the App Ready / Compiling status bar at the top
See the browser on : `http://localhost:3001/webpack-dev-server/`

NB: If you want a website in https:
1- change the webpack.dev.config.js file and edit 'https: false' to 'https: true'
2- See the browser on : `https://localhost:3001`
```

## Global Dependencies
| Dependency | Version | Install                               |
| ---------- | ------- | ------------------------------------- |
| NodeJS     | 6.x.x   | [http://node.org](http://nodejs.org/) |
| Npm        | 3.x.x   | [http://node.org](http://nodejs.org/) |
| Webpack    | 1.8.x   | `npm install webpack`                 |

## Usage
### Tasks
- `$ npm run start`: Like npm run dev
- `$ npm run dev`: Create distribution package for the development environment and start web-server and live-reload
- `$ npm run prod`: Create distribution package for the production environment
- `$ npm run test`: Execute unit tests with Karma and execute e2e tests with Protractor
- `$ npm run unit`: Execute unit tests with Karma
- `$ npm run unit:watch`: Execute and refresh automatically the unit tests with Karma if you changed a test
- `$ npm run e2e`: Execute e2e tests with Protractor
- `$ npm run doc`: Generate template documentation and start web-server to read the documentation
- `$ npm run xo`: Lint Javascript code


### Environments
#### Development:
- `$ npm run dev`

#### Production:
- `$ npm run prod`

#### Test:
- `$ npm run test`
- `$ npm run unit`
- `$ npm run unit:watch`
- `$ npm run e2e`

#### Documentation:
- `$ npm run doc`
See the browser on : `http://localhost:8181`

In order to contribute, please run `npm test` and check you don't have any JSHint error by running `npm run xo`

Cheers !
