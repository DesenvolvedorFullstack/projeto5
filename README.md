Rotas e views em AngularJS
===
Em AngularJS temos a possibilidades de criar rotas para que possamos
controlar nossa aplicação de uma forma bem simples e assim aplicar os
conceitos de SPA(Single Page Application).

Para criar uma rota em nosso projeto, vamos precisar da lib angular-route e já que temos
um projeto que já tem um gerenciador de dependências(bower) então vamos apenas
colocar em seu arquivo de configuração essa dependência que necessitamos em nosso projeto.
Vamos criar um novo projeto a partir do projeto anterior, agora vamos inserir
em nosso arquivo bower.json a seguinte linha:

~~~json
//projeto5/bower.json
{
  "name": "projeto5",
  "description": "Meu projeto com directive",
  "main": "main.js",
  "authors": [
    "Seu nome"
  ],
  "license": "MIT",
  "homepage": "https://github.com/DesenvolvedorFullstack/projeto3",
  "dependencies": {
    "angular": "~1.4.0",
    "angular-route": "~1.4.0"
  }
}
~~~

perceba que colocamos apenas colocamos a linha que tem o angular-route, agora basta
executarmos o bower install para que essa lib esteja disponível em nossa basta bower_components.
Agora vamos colocar a nossa lib em nosso index.html, para que possamos utilizá-la em nossos códigos Javascript.
Nosso index.html ficará assim:

~~~html
<!-- projeto5/index.html -->
<html ng-app="Projeto5">
    <head>
        <title>Directives</title>
    </head>
    <body ng-controller="MinhaController">
        <pessoa ng-model="pessoa"></pessoa>
        <script src="bower_components/angular/angular.min.js"></script>
        <script src="bower_components/angular-route/angular-route.min.js"></script>
        <script src="main.js"></script>
        <script src="directives/pessoa.js"></script>
    </body>
</html>

~~~

Agora para configurar nosso angular-route será bem simples, lá no arquivo main.js será onde faremos toda a configuração,
vamos utilizar a mesma controller do projeto inicial para que você veja o quanto é simples criar uma rota em AngularJS.

~~~javascript
//projeto5/main.js
angular.module('Projeto5', ['NgRoute',
        'Projeto5.minhaPrimeiraView'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/minha-primeira-view'
        });
    }]);
~~~

Agora o nosso main.js ficará dessa forma, perceba que nós tiramos a controller dessa configuração.
Para cada controller faremos um arquivo de configuração específica. Vamos organizar em em uma pasta chamada controllers.
A nossa primeira controller será a que criamos em nosso primeiro projeto, então ela ficará da seguinte forma:

~~~javascript
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
~~~

Veja que estamos utilizando o mesmo objeto pessoa, mas colocamos os códigos que definem de fato nossa controller,
mas também configuramos a nossa devida view através do parâmetro templateUrl. Agora vamos criar o nosso arquivo de template
que vai ficar da seguinte forma:

~~~html
<!--projeto5/views/minha-primeira-view.html-->
<h1>Essa é a minha primeira view</h1>
<pessoa ng-model="pessoa"></pessoa>
~~~

Agora precisamos dizer para o nosso index.html que vamos utilizar as views de acordo com as rotas configuradas.
E também fazer com que o index.html importe as nossas novas controllers.
Nosso index.html ficará da seguinte forma:

~~~html
<!-- projeto5/index.html -->
<!doctype html>
<html ng-app="Projeto5">
    <head>
        <title>Rotas e views em AngularJS</title>
    </head>
    <body>
       <ng-view></ng-view>
        <script src="bower_components/angular/angular.min.js"></script>
        <script src="bower_components/angular-route/angular-route.min.js"></script>
        <script src="main.js"></script>
        <script src="controllers/minha-primeira-controller.js"></script>
        <script src="directives/pessoa.js"></script>
    </body>
</html>
~~~

Pronto! Agora basta executarmos o nosso projeto utilizando o comando npm start.
Perceba que agora ele carrega todos a nossa controller e seu respectivo template HTML.
Agora vamos aos exercícios.Caso queira baixar esse exemplo, basta clicar [aqui](https://github.com/DesenvolvedorFullstack/projeto5)..
