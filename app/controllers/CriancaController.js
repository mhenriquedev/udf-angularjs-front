var app = angular.module("CriancaManagement", []);

// Controller
app.controller("CriancaController", function ($scope, $http) {

   $scope.criancas = [];
   $scope.criancaForm = {
      id: undefined,
      nome: "Teste",
      idade: 5
   };

   // Atualiza
   refreshCriancaData();

   // HTTP CRUD Para Crianca
   // Chamada: http://localhost:8080/criancas
   // TODO: Mover os métodos para 'services'
   $scope.adicionaCrianca = () => {

      method = "POST";
      url = 'http://localhost:8080/api/criancas/';

      // if ($scope.criancaForm.id == -1) {
      //    method = "POST";
      //    url = 'http://localhost:8080/api/criancas/';
      // } else {
      //    method = "PUT";
      //    url = 'http://localhost:8080/api/criancas/';
      // }

      $http({
         method: method,
         url: url,
         data: angular.toJson($scope.criancaForm),
         headers: {
            'Content-Type': 'application/json'
         }
      }).then(success, error);
   };

   $scope.createEmployee = () => {
      clearFormData();
   }

   // HTTP DELETE- delete employee by Id
   // Call: http://localhost:8080/employee/{empId}
   $scope.deletaCrianca = (crianca) => {
      $http({
         method: 'DELETE',
         url: 'http://localhost:8080/api/criancas/' + crianca.id
      }).then(success, error);
   };

   // In case of edit
   $scope.atualizaCrianca = (crianca) => {
      $scope.criancaForm.id = crianca.id;
      $scope.criancaForm.nome = crianca.nome;
      $scope.criancaForm.idade = crianca.idade;
   };

   // Private Method
   // HTTP GET- get all employees collection
   // Call: http://localhost:8080/employees
   function refreshCriancaData() {
      $http({
         method: 'GET',
         url: 'http://localhost:8080/api/criancas/'
      }).then((res) => {
         console.log('res', res); // success
         $scope.criancas = res.data;
      }, (res) => { // error
         console.log("Error: " + res.status + " : " + res.data);
      });
   }

   function success(res) {
      refreshCriancaData();
      clearFormData();
   }

   function error(res) {
      let data = res.data;
      let status = res.status;
      let header = res.header;
      let config = res.config;
      alert("Error: " + status + ":" + data);
   }

   // Clear the form
   function clearFormData() {
      $scope.criancaForm.id = -1;
      $scope.criancaForm.nome = "";
      $scope.criancaForm.idade = 0;
   }
   ;
});