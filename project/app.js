var tourismApp = angular.module('tourismApp',['ngRoute'])


tourismApp.config(['$routeProvider',function($routeProvider){
     


    $routeProvider
    .when('/', {
        templateUrl : 'views/home.html',
      })
      $routeProvider
    .when('/about', {
        templateUrl : 'views/about.html',

      })
      .when('/wildlife', {
        templateUrl : 'views/wildlife.html',
        controller : 'animalController'

      })
      .when('/nature', {
        templateUrl : 'views/nature.html',
        controller : 'natureController'

      })
      .when('/scenery', {
        templateUrl : 'views/sceneries.html',
        controller : 'sceneriesController'

      })
    .when('/directory',{
        templateUrl:'views/directory.html',
    })

 }])

 
 tourismApp.controller('animalController',['$scope','$http',function($scope,$http){

  $http.get('data/animal.json').then(function(response){
    $scope.wildlife = response.data;
  })
 }])

 tourismApp.controller('natureController',['$scope','$http',function($scope,$http){

  $http.get('data/nature.json').then(function(response){
    $scope.nature = response.data;
  })
 }])

 tourismApp.controller('sceneriesController',['$scope','$http',function($scope,$http){

  $http.get('data/sceneries.json').then(function(response){
    $scope.sceneries = response.data;
  })
 }])
