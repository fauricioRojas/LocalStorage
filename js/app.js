(function() {
	'use strict';

	angular.module('app', ['ngRoute', 'LocalStorageModule'])
	.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'templates/ToDo.html',
			controller: 'ToDoCtrl'
		})
		.otherwise('/');
	});
	
})();