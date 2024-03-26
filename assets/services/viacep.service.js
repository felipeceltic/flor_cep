(function () {
  'use strict';

  angularjs.service('viacepService', ["$q", function ($q) {

    var client = ZAFClient.init();

    return {

      consultCEP: function (CEP) {

        var deferred = $q.defer();

        client.request({
          url: 'https://viacep.com.br/ws/'+CEP+'/json/',
          type: 'GET',
          contentType: 'application/json'
        }).then(function (response) {
          deferred.resolve(response);
        }).catch(function (error) {
          deferred.reject(error)
        });
        return deferred.promise;
      },

    }

  }])

})();