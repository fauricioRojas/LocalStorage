(function() {
	'use strict';

	angular.module('app')
	.controller('ToDoCtrl', function($scope, $filter, ToDoFactory) {
		$scope.activities = ToDoFactory.getAll();
		$scope.addActivity = addActivity;
		$scope.removeActivity = removeActivity;
		$scope.clean = clean;
		$scope.validate = validate;
		$scope.errorActivity = true;

		$scope.$watch('newActivity.description',function() {
			$scope.validate();
		});
		$scope.$watch('newActivity.date',function() {
			$scope.validate();
		});

        function validate() 
        {
        	console.log($scope.newActivity.date);
            if(!$scope.newActivity.description.length || $scope.newActivity.date === undefined  || $scope.newActivity.date === null) {
               $scope.errorActivity = true;
            }
            else {
               $scope.errorActivity = false;
            }
        }

		function addActivity() {
			console.log("ADD");
			$scope.date = $filter('date')($scope.newActivity.date, 'yyyy-MM-dd');
			$scope.newActivity.date = $scope.date;
			ToDoFactory.add($scope.newActivity);
			$scope.newActivity = {};
			$scope.errorActivity = true;
		}

		function removeActivity(activity) {
			$scope.activities = ToDoFactory.remove(activity);
		}

		function clean() {
			$scope.activities = ToDoFactory.clean();
		}
	});

})();