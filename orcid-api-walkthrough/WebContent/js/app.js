var HackatonApp = angular.module('HackatonApp',
		[ 'ngRoute', 'OauthController' ]);

HackatonApp.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl : 'partials/introduction.html',
				controller : 'IntroductionController'
			}).when('/description', {
				templateUrl : 'partials/description.html',
				controller : 'DescriptionController'
			}).when('/technologies', {
				templateUrl : 'partials/technologies.html',
				controller : 'TechnologiesController'
			}).when('/get_code', {
				templateUrl : 'partials/get_code.html',
				controller : 'GetPermissionsController'
			}).when('/get_token', {
				templateUrl : 'partials/get_token.html',
				controller : 'GetTokenController'
			}).when('/read_profile', {
				templateUrl : 'partials/read_record.html',
				controller : 'ReadRecordController'
			}).when('/add_work', {
				templateUrl : 'partials/add_work.html',
				controller : 'AddWorkController'
			}).otherwise({
				redirectTo : '/'
			});

			$locationProvider.html5Mode(true);
		} ]);