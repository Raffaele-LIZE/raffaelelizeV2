
var app = angular.module('rdev', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl',
    })
    .state('project-wall', {
      url: '/project-wall',
      templateUrl: 'views/project-wall.html',
      controller: 'ProjectWallCtrl',
    })
    .state('project', {
      url: '/project/:id',
      templateUrl: 'views/project.html',
      controller: 'ProjectCtrl'

      // TODO RESOLVE OBJ BY EXP ID
    })
    .state('career', {
      url: '/career',
      templateUrl: 'views/career.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html'
    });
});