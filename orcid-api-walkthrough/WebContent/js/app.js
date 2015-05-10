var HackatonApp = angular.module('HackatonApp', ['ngRoute','OauthController']);

HackatonApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
	    templateUrl: 'partials/introduction.html',
	    controller: 'IntroductionController'
	  }).
  when('/description', {
    templateUrl: 'partials/description.html',
    controller: 'DescriptionController'
  }).
  when('/technologies', {
    templateUrl: 'partials/technologies.html',
    controller: 'TechnologiesController'
  }).
  when('/get_code', {
    templateUrl: 'partials/get_code.html',
    controller: 'GetCodeController'
  }).
  when('/get_token', {
    templateUrl: 'partials/get_token.html',
    controller: 'GetTokenController'
  }).
  when('/read_profile', {
    templateUrl: 'partials/read_record.html',
    controller: 'ReadRecordController'
  }).
  when('/add_work', {
    templateUrl: 'partials/add_work.html',
    controller: 'AddWorkController'
  }).
  otherwise({	  
    redirectTo: '/'
  });
}]);