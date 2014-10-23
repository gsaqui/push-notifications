angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('GamesCtrl', function($scope, Games) {
	console.log('Games GamesCtrl')
	
  Games.all().then(function(data){
    $scope.games = data.data.results;
  });
})

.controller('GameDetailCtrl', function($scope, $stateParams, Games) {
  Games.get($stateParams.gameId).then(function(data){
    $scope.game = data.data;  
  });
})

.controller('AccountCtrl', function($scope) {
})


.controller('LoginCtrl', function($scope, $state) {

  $scope.loginData = {};

  $scope.tryLogin = function() {
    // if($scope.loginData.email !== '' && $scope.loginData.password !== ''){
    	$state.go('tab.games')
    // }
  };
})

.controller('SignupCtrl', function($scope) {
});