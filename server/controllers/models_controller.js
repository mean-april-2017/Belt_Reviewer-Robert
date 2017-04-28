console.log('Models_controller.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var mongoose = require('mongoose');
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
var Post = mongoose.model('Post')

/////////////////////// REPEAT FUNCTIONS ///////////////////////
function modelsResult(res,err,result){
  if(err){
    res.json(err)
  }else{
    res.json(result);
  }
}

/////////////////////// CONTROLLER FUNCTIONS ///////////////////////
module.exports.newtopic = function(req,res){
  Topic.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
};

module.exports.gettopics = function(req,res){
  Topic.find({}, function(err,result){
    modelsResult(res,err,result)
  })
};

module.exports.topicdetail = function(req,res){
  Topic.findOne({_id: req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
};

module.exports.newuser = function(req,res){
  User.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.getuser = function(req,res){
  User.findOne({_id: req.params.id}, function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.newpost = function(req,res){
  console.log(req.body)
  Post.create(req.body, function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.getpost = function(req,res){
  Post.find({}).populate('userId').populate('topicId').exec( function(err,result){
    modelsResult(res,err,result)
  })
}

module.exports.updatepost = function(req,res){
  if(req.body.key === "like"){
    Post.update({_id:req.params.id},{$inc:{like:1}}, function(err,result){
      modelsResult(res,err,result)
    })
  }else{
    Post.update({_id:req.params.id},{$inc:{dislike:1}},
    function(err,result){
      modelsResult(res,err,result)
    })
  }
}
