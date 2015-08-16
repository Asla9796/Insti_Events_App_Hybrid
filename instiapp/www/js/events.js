var app = angular.module('myApp', []);

app.controller('eventsCtrl', function($scope) {

	$scope.events= [

		{
			name: 'Manual Robotics',
			date: '15th August 2015',
			time: '17:00 to 19:00',
			venue: 'CFI',
			description: 'EVENTSSSSSSS'

		}
	];
});