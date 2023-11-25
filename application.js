var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/fruits', {
            templateUrl: 'fruits.html'
        })
        .when('/seller', {
            templateUrl: 'seller.html'
        })
        .when('/contact', {
            templateUrl: 'contact.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

