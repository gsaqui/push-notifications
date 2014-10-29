angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('GamesCtrl', function($scope, $ionicLoading, Games) {
	
	
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.loadData = function(){
    $scope.show();
    Games.all().then(function(data){
      $scope.games = data;
      $scope.$apply();
      $scope.hide();
    });  
  }
})

.controller('GameDetailCtrl', function($scope, $stateParams, $ionicLoading, Games) {
  $scope.answers = {
    gameId : 0
  };

  $ionicLoading.show({
      template: 'Loading...'
    });
  Games.get($stateParams.gameId).then(function(data){
    $scope.answers.gameId = $stateParams.gameId
    $scope.game = data;  
    $scope.$apply();
    $ionicLoading.hide();
  });

  $scope.submitGameAnswers = function(){
    //does this exist on the server yet for this user?
    //if not we want to post else put
    
    angular.forEach($scope.answers, function(value, key) {
      console.log(value, key);

      console.log('key is ', key, "answer is", value)
      if(key !== 'gameId'){
        var UserAnswers = Parse.Object.extend("UserAnswers");
        var myAnswers = new UserAnswers();
            myAnswers.save({
              gameId: $scope.answers.gameId,
              questionId: key,
              answerId: value.id,
              userId: Parse.User.current().id
            }, {
              success: function(data) {
                // The object was saved successfully.
                console.log('successful save');
              },
              error: function(data, error) {
                console.log('we haz error', data, error);
                // The save failed.
                // error is a Parse.Error with an error code and message.
              }
            });
      }
   });  
     /*
    myAnswers.save({
      gameId: $scope.answers.gameId,
      questionId: questionId,
      answerId: $scope.answers[questionId],
      userId: Parse.User.current().id
    }, {
      success: function(data) {
        // The object was saved successfully.
        console.log('successful save');
      },
      error: function(data, error) {
        console.log('we haz error', data, error);
        // The save failed.
        // error is a Parse.Error with an error code and message.
      }
    });
*/

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
        console.log(user, error)
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
});