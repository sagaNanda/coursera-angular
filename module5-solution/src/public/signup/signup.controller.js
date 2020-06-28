(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ['$rootScope','MenuService'];
  function SignUpController($rootScope,MenuService) {
    var reg = this;


    reg.submit = function () {
      var promise =MenuService.getSingleMenuItemDetails(reg.user.dish);
      promise.then(function (response) {
        reg.user.itemDetails=response;
        $rootScope.user=reg.user;
        $rootScope.completed=true;
        reg.completed = true;
        reg.errorDish = false;
      })
      .catch(function (error) {
        console.log(error);
        reg.completed = false;
        reg.errorDish = true;
      })
    };
  }
  
  })();