angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})


.controller('LoginCtrl', function($scope, $state) {

  $scope.loginData = {};

  $scope.tryLogin = function() {
  	console.log('here i am')
    // if($scope.loginData.email !== '' && $scope.loginData.password !== ''){
    	$state.go('tab.friends')
    // }
  };
})

.controller('SignupCtrl', function($scope) {
});