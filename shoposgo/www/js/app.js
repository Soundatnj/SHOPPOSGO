'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'controllers',
	'ProductCont'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/welcome', {templateUrl: 'templates/welcome.html', controller: 'MainCtrl'});
	$routeProvider.when('/join', {templateUrl: 'templates/register.html', controller: 'MainCtrl'});
	$routeProvider.when('/login', {templateUrl: 'templates/login.html', controller: 'MainCtrl'});
    $routeProvider.when('/products', {templateUrl: 'templates/viewProducts.html', controller: 'ProductController'});
    $routeProvider.otherwise({redirectTo: '/welcome'});
}]);