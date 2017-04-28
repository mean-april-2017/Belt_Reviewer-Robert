app.controller('dashboard_controller', function($scope, factories, $routeParams, $location, $route, $cookies){

  factories.getTopics(function(topics){
    $scope.topics = topics
  })

  $scope.userName = $cookies.get("userName");

  $scope.createTopic = function(){

    $scope.newTopic.user =  $cookies.get("userName")
    $scope.newTopic.userId = $cookies.get('userId')

    factories.createTopic($scope.newTopic,function(response){
    console.log(response);
    $route.reload()
  });
  }

});
