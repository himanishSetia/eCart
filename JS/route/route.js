var eCart = angular.module('eCart',['ngRoute','ui-notification']);

eCart.config(function($routeProvider){
    $routeProvider
    .when('/login',{
        templateUrl : "Views/login.html",
        controller : "loginController"
    })
    .when('/dashboard',{
        templateUrl : "Views/dashboard.html",
        controller : "dashboardController"
    })

    .when('/register',{
        templateUrl : "Views/register.html",
        controller : "registerController"
    })

    .otherwise({
        redirectTo: '/login'
    });
})