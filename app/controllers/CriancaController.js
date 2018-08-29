var app = angular.module("CriancaManagement", []);

// Controller
app.controller("CriancaController", function ($scope, $http) {

   $scope.criancas = [];
   $scope.criancaForm = {
      id: -1,
      nome: "",
      idade: null
   };
   $scope.criancaNome;
   $scope.criancaId;

   // Atualiza
   refreshCriancaData();

   // HTTP CRUD Para Crianca
   // Chamada: http://localhost:8080/criancas
   // TODO: Mover os métodos para 'services'
   $scope.adicionaCrianca = (id) => {

      method = "POST";
      url = 'http://localhost:8080/api/criancas/';

      if (id === -1) {
         method = "POST";
         url = 'http://localhost:8080/api/criancas/';
      } else {
         method = "PUT";
         url = 'http://localhost:8080/api/criancas/' + id;
      }

      $http({
         method: method,
         url: url,
         data: angular.toJson($scope.criancaForm),
         headers: {
            'Content-Type': 'application/json'
         }
      }).then(success, error);
   };

   $scope.limpaFormulario = () => {
      clearFormData();
   }

   // HTTP DELETE- deleta crianca por Id
   // Call: http://localhost:8080/crianca/{id}
   $scope.deletaCrianca = (crianca) => {
      $http({
         method: 'DELETE',
         url: 'http://localhost:8080/api/criancas/' + crianca.id
      }).then(success, error);
   };

   $scope.buscaCriancaPorId = (id) => {
      $http({
         method: 'GET',
         url: 'http://localhost:8080/api/criancas/' + id
      }).then((res) => {
         console.log('res', res); // success
         $scope.criancaNome = res.data.nome;
         success();
      })
      .catch(error => {
         $scope.criancaNome = "";
         alert(error.data.message);
         console.log('error', error)
      })
   }

   // In case of edit
   $scope.atualizaCrianca = (crianca) => {
      $scope.criancaForm.id = crianca.id;
      $scope.criancaForm.nome = crianca.nome;
      $scope.criancaForm.idade = crianca.idade;
   };

   // Private Method
   // HTTP GET- busca todas as criancas
   // Call: http://localhost:8080/criancas
   function refreshCriancaData() {
      $http({
         method: 'GET',
         url: 'http://localhost:8080/api/criancas/'
      }).then((res) => {
         console.log('res', res); // success
         $scope.criancas = res.data;
      }, (res) => { // error
         console.log("Error: " + res.status + " : " + res);
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

   // Limpa o formulario
   function clearFormData() {
      $scope.criancaForm.id = -1;
      $scope.criancaForm.nome = "";
      $scope.criancaForm.idade = null;
   }
   ;
});