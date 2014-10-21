angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('GamesCtrl', function($scope, Games) {
	console.log('Games GamesCtrl')
	console.log(Games.all())
  $scope.games = Games.all();
})

.controller('GameDetailCtrl', function($scope, $stateParams, Games) {
  $scope.game = Games.get($stateParams.gameId);
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