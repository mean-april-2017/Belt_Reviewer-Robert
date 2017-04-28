var app = angular.module('discussionBoardApp', ['ngRoute','ngMessages','ngCookies']);

/////////////////////// CLIENT SIDE ROUTES ///////////////////////
app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl:'./partials/login.html',
    controller: 'login_controller'
  })
  .when('/',{
    templateUrl: './partials/dashboard.html',
    controller: 'dashboard_controller'
  })
  .when('/profile/:id',{
    templateUrl: './partials/profile.html',
    controller: 'profile_controller'
  })
  .when('/topic/:id', {
    templateUrl: './partials/topic.html',
    controller: 'topic_controller'
  })
  .otherwise('/');
});
