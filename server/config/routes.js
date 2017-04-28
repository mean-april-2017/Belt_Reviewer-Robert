console.log('Routes.js File Ready To Go')

/////////////////////// REQUIREMENTS ///////////////////////
var modelsController = require('../controllers/models_controller.js')

/////////////////////// SERVER SIDE ROUTES ///////////////////////
module.exports = function(app){
  app.post('/topic', modelsController.newtopic);
  app.get('/topic', modelsController.gettopics);
  app.get('/topic/:id', modelsController.topicdetail);
  app.post('/user', modelsController.newuser);
  app.get('/user/:id', modelsController.getuser);
  app.post('/post', modelsController.newpost);
  app.get('/posts', modelsController.getpost);
  app.post('/post/:id', modelsController.updatepost)
}
