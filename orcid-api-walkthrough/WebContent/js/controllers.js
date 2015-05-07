var OauthController = angular.module("OauthController", []);

OauthController.controller("IntroductionController", [ '$scope', '$http',
		'$routeParams', '$location', function($scope, $http, $routeParams, $location) {
			console.log("In introduction controller");
			$location.path("/");
		} ]);

OauthController.controller("DescriptionController", [ '$scope', '$http',
		'$routeParams', function($scope, $http, $routeParams) {
			console.log("In description controller");
		} ]);

OauthController.controller("TechnologiesController", [ '$scope', '$http',
		'$routeParams', function($scope, $http, $routeParams) {
			console.log("In Technologies controller");
		} ]);

OauthController.controller("GetCodeController", [ '$scope', '$http',
		'$routeParams', function($scope, $http, $routeParams) {
			console.log("In getCode controller");
		} ]);

OauthController.controller("GetTokenController", [ '$scope', '$http',
		'$routeParams', function($scope, $http, $routeParams) {
			console.log("In getToken controller");
		} ]);

OauthController.controller("ReadRecordController", [ '$scope', '$http',
		'$routeParams', function($scope, $http, $routeParams) {
			console.log("In readRecord controller");
		} ]);

OauthController.controller("AddWorkController", [ '$scope', '$http',
		'$routeParams', function($scope, $http, $routeParams) {
			console.log("In addWork controller");
		} ]);