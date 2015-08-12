var framework = new Framework7();
var $$ = Dom7;
var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.myusers={username:'user1',password:'blah'};
  $scope.submit=function()
  { 
  	console.log("jndklj");
  	if($scope.username==="user1" && $scope.password==="blah")
      framework.alert("Success!");
     else{
       framework.alert("Invalid Login");
     }
  };
});

 
 
