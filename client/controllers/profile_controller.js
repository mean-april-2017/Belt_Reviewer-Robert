app.controller('profile_controller', function($scope, factories, $routeParams, $location, $route, $cookies){

  factories.getProfile($routeParams.id, function(profile){
    $scope.profile = profile;
  })

  $scope.logout = function(){
    $cookies.remove("userId")
    $cookies.remove("userName")
    $location.path('/login')
  }

});
