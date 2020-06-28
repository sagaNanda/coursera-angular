(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['$rootScope','ApiPath'];
    function MyInfoController($rootScope,ApiPath) {
            var $ctrl=this;
            if($rootScope.user){
                $ctrl.user=$rootScope.user;
                $ctrl.firstname=$rootScope.user.firstname;
                $ctrl.lastname=$rootScope.user.lastname;
                $ctrl.email=$rootScope.user.email;
                $ctrl.phone=$rootScope.user.phone;
                $ctrl.itemDetails=$rootScope.user.itemDetails;
                $ctrl.completed=$rootScope.completed;
                $ctrl.basePath = ApiPath;
            }
    }
    
    })();