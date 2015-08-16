//Define an angular module for our app
var sampleApp = angular.module('tabs', ['ngRoute']);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    console.log("oii");
    $routeProvider.
      when('/events', {
        templateUrl: 'views/events.html',
        controller: 'AddOrderController'
    }).
      when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ShowOrdersController'
    }).
       when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'ShowOrdersController'
    }).
       when('/scoreboard', {
        templateUrl: 'views/scoreboard.html',
        controller: 'ShowOrdersController'
    }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);


sampleApp.controller('AddOrderController', function($scope) {
     
     console.log("oii");
    $scope.message = 'This is Add new order screen';
     
});

