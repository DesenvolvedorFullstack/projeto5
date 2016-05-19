//projeto5/controllers/minha-primeira-controller.js
angular.module('Projeto5.minhaPrimeiraView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/minha-primeira-view', {
            templateUrl: 'views/minha-primeira-view.html',
            controller: 'MinhaPrimeiraController'
        });
    }])
    .controller('MinhaPrimeiraController', function($scope) {
        //Objeto pessoa
        $scope.pessoa = {
            nome: "Nataniel",
            idade: 25,
            email: "nataniel.paiva@gmail.com"
        };
    });
