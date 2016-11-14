var app = angular.module('wikis', ['ui.router']);

var pages = [{name: 'Curling', descr: 'Curling is really fun, and cool, eh?'},
            {name: 'Che', descr: 'Che sucks, eh?'}];


app.config(function($stateProvider, $stateParams) {
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    templateUrl: '/home.html',
  })
  .state({
    name: 'page_view',
    url: '/{page_name}',
    templateUrl: '/page_view.html',
    controller: 'PageViewController'
  });
});

app.controller('PageViewController', function($scope, $stateParams) {
  var page_name = $stateParams.page_name;
  for (var p = 0; p < pages.length; p++) {
    if (pages[p].name === pageName) {
      $scope.pageContent = pages[p];
    }
  }
});
