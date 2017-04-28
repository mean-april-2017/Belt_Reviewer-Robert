app.factory('factories', function($http){
  var factory = {};


/////////////////////// (CODE BLOCK) ///////////////////////

  factory.createTopic = function(topic,callback){
    console.log('Hit The Factory', topic);
    $http.post('/topic', topic).then(function(response){
      if(response.data.err){
        console.log('Errors', response.data.err)
      }else{
        console.log('Success', response.data);
      }
      callback(response.data)
    })
  }

  factory.getTopics = function(callback){
    $http.get('/topic').then(function(response){topics = response.data;
    callback(topics);
  })
}

  factory.topicDetail = function(id, callback){
    $http.get('/topic/'+id).then(function(response){topicDetail = response.data;
    callback(topicDetail);
    })
  }

  factory.createUser = function(user, callback){
    $http.post('/user', user).then(function(response){
      userInfo = {
        id: response.data._id,
        user: response.data.user
      }
      callback(userInfo)
    })
  }

  factory.getProfile = function(id, callback){
    $http.get('/user/'+id).then(function(response){
      callback(response.data)
    })
  }

  factory.createPost = function(post, callback){
    $http.post('/post', post).then(function(response){
      callback(response.data)
    })
  }

  factory.getPosts = function(callback){
    $http.get('/posts').then(function(response){
      callback(response.data)
    })
  }

  factory.createPostLike = function(id, callback){
    postUpdate = {key: "like"}
    console.log('WORKS UP TO THE FACTORY', postUpdate, id)
    $http.post('/post/'+id, postUpdate).then(function(response){
      callback(response.data)
    })
  }

  factory.createPostDislike = function(id,callback){
    postUpdate = {key: "dislike"}
    console.log('WORKS UP TO THE FACTORY', postUpdate, id)
    $http.post('/post/'+id, postUpdate).then(function(response){
      callback(response.data)
    })
  }


  return factory;
})
