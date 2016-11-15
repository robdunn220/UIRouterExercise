var app = angular.module('wikis', ['ui.router']);

function WikiPage(title, content) {
  this.title = title;
  this.content = content;
}

var pages = {
  Python: new WikiPage('Python', 'Python is a fun to use programming language. It is great for beginners.'),
  HTML: new WikiPage('HTML', 'HTML is the markup language used for making pages on the world wide web.')
  };

app.controller('PageViewController', function($scope, $stateParams) {
  var nombreDePagina = $stateParams.page_name;
  $scope.page = pages[nombreDePagina];
});

app.controller('PageEditController', function($scope, $stateParams) {
  var pageName = $stateParams.page_name;
  $scope.pageEdit = pages[pageName];

  $scope.saveEdit = function(newContent) {
    pages[pageName].content = newContent;
  };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    templateUrl: '/home.html'
  })
  .state({
    name: 'page_view',
    url: '/{page_name}',
    templateUrl: 'page_view.html',
    controller: 'PageViewController'
  })
  .state({
    name: 'page_edit',
    url: '/{page_name}/edit',
    templateUrl: 'page_edit.html',
    controller: 'PageEditController'
  });
});
