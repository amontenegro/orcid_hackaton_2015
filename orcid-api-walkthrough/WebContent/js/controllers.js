var OauthController = angular.module("OauthController", []);

OauthController.controller("IntroductionController", [ '$scope', '$http',
		'$routeParams', '$location', function($scope, $http, $routeParams, $location) {
			console.log("In introduction controller");
			if($location.search()['code'] != null) {
				console.log("Code: " + $location.search()['code']);
			}
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
		function GetCodeController($scope, $http) {
			$scope.authString = "http://[api_url]//oauth/authorize?client_id=[client_id]&response_type=code&redirect_uri=[redirect_uri]&scope=[scope]";
			$scope.load = function() {
				console.log("In get code controller");
			}, 
			$scope.getCode = function() {
				//Build the string
				var apiUri = $scope.authString;
				apiUri = apiUri.replace('[api_url]', 'qa.orcid.org');
				apiUri = apiUri.replace('[client_id]', $scope.form.client_id);
				apiUri = apiUri.replace('[redirect_uri]', 'http://localhost:8080/orcid-api-walkthrough/code');
				apiUri = apiUri.replace('[scope]', $scope.form.scope);
				console.log(apiUri);
				
				//$cookies.put('orcid_oauth2_client_id', $scope.form.client_id);
				//$cookies.put('orcid_oauth2_redirect_uri', $scope.form.redirect_uri);
				setTimeout(function() {
					window.location.href = apiUri;
	            }, 50000);
				
			};
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