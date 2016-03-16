  var i = 0;
var app = angular.module('BBapp', []);

app.controller('BBController', function($scope,$http){

$scope.bigblind = 4;
$scope.smallblind = 2;

  $scope.Klikkaus = function () {
  
      if (i < 21){
  i = i + 1;
  }
  else {
  i = i
  }
  

  $scope.smallblind = $scope.blinds[i].bigBlind;
  $scope.bigblind = $scope.blinds[i].smallBlind;


  
  };
  
    $scope.missKlikkaus = function () {
	if(i > 0) {
	i =  i - 1;
   }
   else {
   i = i;
   }
  $scope.smallblind = $scope.blinds[i].bigBlind;
  $scope.bigblind = $scope.blinds[i].smallBlind;
  


  };
  
   $http.get("bb.json")
    .success(function(response) {$scope.blinds = response.blindit;});
  

});
