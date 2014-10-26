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
  $scope.answers = {
    gameId : 0
  };

  Games.get($stateParams.gameId).then(function(data){
    $scope.answers.gameId = $stateParams.gameId
    $scope.game = data.data;  
  });

  $scope.submitGameAnswers = function(){
    //does this exist on the server yet for this user?
    //if not we want to post else put
  }
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