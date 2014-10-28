angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('GamesCtrl', function($scope, Games) {
	console.log('Games GamesCtrl')
	

  Games.all().then(function(data){
    $scope.games = data;
  });
})

.controller('GameDetailCtrl', function($scope, $stateParams, Games) {
  $scope.answers = {
    gameId : 0
  };

  Games.get($stateParams.gameId).then(function(data){
    console.log('data coming back', data.get('homeTeam'))
    $scope.answers.gameId = $stateParams.gameId
    $scope.game = data;  
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

  $scope.isUserLoggedIn = function(){
    if(Parse.User.current()){
      $state.go('tab.games')
    }
  }

  $scope.tryLogin = function() {
    Parse.User.logIn($scope.loginData.email, $scope.loginData.password, {
      success: function(user) {
        $state.go('tab.games')
      },
      error: function(user, error) {
        console.log(user, error)
      }
    });
    
  };
})

.controller('SignupCtrl', function($scope, $state) {
  $scope.loginData = {};  

  $scope.trySignup = function(){
    var user = new Parse.User();
    user.set("username", $scope.loginData.email);
    user.set("password", $scope.loginData.password);
    user.set("email", $scope.loginData.email);
    user.set("name", $scope.loginData.name);
    user.signUp(null, {
      success: function(user) {
        $state.go('tab.games');
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
});