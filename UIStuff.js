var app = angular.module('pageStuff', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider
    .state({
      name: 'family',
      url: '/family',
      templateUrl: '/family.html'
    })
    .state({
      name: 'pets',
      url: '/pets',
      templateUrl: '/pets.html'
    });
});
