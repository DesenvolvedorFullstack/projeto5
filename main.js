//projeto5/main.js
var app = angular.module('Projeto5', ['ngRoute',
        'Projeto5.minhaPrimeiraView'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/minha-primeira-view'
        });
    }]);
