app.controller('topic_controller', function($scope, factories, $routeParams, $location, $route, $cookies){

  factories.topicDetail($routeParams.id,function(topicDetail){
    $scope.topicDetail = topicDetail;
  });

  factories.getPosts(function(posts){
    $scope.posts = posts
  });

  $scope.createPost = function (topicId){
    $scope.post.userId = $cookies.get('userId')
    $scope.post.topicId = topicId

    factories.createPost($scope.post,function(response){
      console.log(response)
    })
  }

  $scope.createLike = function(postId){
    factories.createPostLike(postId,function(response){
      console.log(response);
      $route.reload()
    })
  }

  $scope.createDislike = function(postId){
    factories.createPostDislike(postId, function(response){
      console.log(response);
      $route.reload()
    })
  }
})
