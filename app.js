/* -----------------------------
 * Application Module
 * ----------------------------- */
var SprintersApp = angular.module('Sprinters',[
	'ngRoute',
	'ngResource',
	'ui.bootstrap'
]);

/* -----------------------------
 * Application Module configuration
 * ----------------------------- */
SprintersApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider.
		when('/', {templateUrl: '/application/home/index.html', title: 'Home'}).
		otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);

	$httpProvider.defaults.withCredentials = true;
 });

/* -----------------------------
 * Application Module running
 * ----------------------------- */
SprintersApp.run(function($rootScope, $location) {
	// Global variables declaration
	$rootScope.basepath = $location.absUrl();
	
	// Routing
	$rootScope.$on('$routeChangeSuccess', function (evt, current, pre) {
		$rootScope.routeParams = $routeParams;
		var route = current.$$route || {title: 'Home'};
		$rootScope.pagetitle = $route.current.title;
	});
});