
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
    .state('project', {
      url: '/project/:id',
      templateUrl: 'views/project.html',
      controller: 'ProjectCtrl'
    })
    .state('career', {
      url: '/career',
      templateUrl: 'views/career.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    });
});
