(function() {
	'use strict';

	angular.module('app')
	.factory('ToDoFactory', function(localStorageService) {
		var toDoFactory = {};
		toDoFactory.key = "angular-todolist";

		if(localStorageService.get(toDoFactory.key)) {
			toDoFactory.activities = localStorageService.get(toDoFactory.key);
		}
		else {
			toDoFactory.activities = [];
		}

		toDoFactory.add = add;
		toDoFactory.updateLocalStorage = updateLocalStorage;
		toDoFactory.clean = clean;
		toDoFactory.getAll = getAll;
		toDoFactory.remove = remove;

		function add(activity) {
			toDoFactory.activities.push(activity);
			toDoFactory.updateLocalStorage();
		}

		function updateLocalStorage() {
			localStorageService.set(toDoFactory.key, toDoFactory.activities);
		}

		function clean() {
			toDoFactory.activities = [];
			toDoFactory.updateLocalStorage();
			return toDoFactory.getAll();
		}

		function getAll() {
			return toDoFactory.activities;
		}

		function remove(item) {
			toDoFactory.activities = toDoFactory.activities.filter(function(activity) {
				return activity !== item;
			});

			toDoFactory.updateLocalStorage();
			return toDoFactory.getAll();
		}

		return toDoFactory;
	});

})();