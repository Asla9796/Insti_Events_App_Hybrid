var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.myusers={username:'user1',password:'blah'};
  $scope.submit=function()
  { if(username===user1" && password==="blah")
      alert("Success!");
     }else{
       alert("Invalid Login");
     }
  }
});