(function () {
  'use strict';

  angularjs.controller('angularjs', ['$scope', 'viacepService', function ($scope, viacepService) {

    //Seleciona o formulário do CEP
    document.getElementById('consultaCEP').addEventListener('submit', function (event) {
      event.preventDefault()

      //Captura o valor do Campo CEP digitado pelo usuário
      var CEP = document.getElementById('cep').value;

      //Faz a chamada da API externa Vtex de CPF
      viacepService.consultCEP(CEP).then(function (data){
        //Retorno success
        $scope.value_cep = data;
        document.getElementById('alertceperror').classList.replace("d-flex", "d-none"); //Oculta o alerta caso já estivesse renderizado
        document.getElementById('tablecep').hidden = false; //Exibe a tabela
        client.invoke('resize', { width: '100%', height: '550px' });
        $('#cepModal').modal('show');
        console.log(data)
      }).catch(function (error) {
        //Retorno error
        $scope.error = error.responseText;
        console.log(error)
      })

    });

  }]);

})();