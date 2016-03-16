  var i = 0;
var app = angular.module('BBapp', ['ngAudio']);

app.controller('BBController', function($scope,$http,ngAudio){


 $scope.oho = ngAudio.load("../sounds/oho.mp3"); // talvi ääni - Tuuli
  $scope.raise = ngAudio.load("../sounds/raise.mp3"); // kesä ääni - Pina Colada

  
  
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
