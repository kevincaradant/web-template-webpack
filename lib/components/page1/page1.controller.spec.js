describe('page1.controller', function () {
	it('makes sure that true is true', function (done) {
		expect(true).to.be.true;
		// expect(homeController.changeName()).toEqual("angular-tips");
		done();
	});
});

/*
describe('page1 Controller', function () {

var scope, $rootScope, $controller;

beforeEach(angular.mock.module('demo.home'));

beforeEach(module(function($provide) {
var TodoServiceMock = {
todos: [],
addTodo: function() {
// ...
},
toggleTodo: function() {
// ...
},
removeDoneTodost() {
// ...
}
};
$provide.value('TodoService', TodoServiceMock);
}));

beforeEach(inject(function(_$rootScope_, _$controller_, _TodoService_){
$controller = _$controller_;
$rootScope = _$rootScope_;
scope = $rootScope.$new();

$controller('TodoController', {
$scope: scope,
TodoService: _TodoService_
});
}));

// Oh, ... do the actual testing !!!
it('should have initial todos', function() {

expect(scope.todos.length).toBe(1);

});
});
*/
