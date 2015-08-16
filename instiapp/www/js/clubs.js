var app = angular.module('myApp', []);

app.controller('clubsCtrl', function($scope) {

	$scope.clubs= [

		{
			name: 'Club1',
			description: 'We are club1 people. We do so and so'

		},

		{
			name: 'Club2',
			descirption: 'We are club2 people. We do so and so'

		}
	];
});