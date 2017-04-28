app.controller('login_controller', function($scope, factories, $routeParams, $location, $route, $cookies){

  $scope.createUser = function(){
    console.log('hit the add user controller function on client side', $scope.newUser);
    factories.createUser($scope.newUser, function(userInfo){
      $cookies.put('userId',userInfo.id);
      $cookies.put('userName',userInfo.user);
      $location.path('/');
    })
  }
});
