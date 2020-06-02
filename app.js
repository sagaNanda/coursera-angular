(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkIfTooMuch = function () {
    var dish = $scope.dishes;
    if(typeof dish === "undefined" || dish === "" || dish === null){
      $scope.message = "Please enter data first";
    }else {
      var listOfDishes = dish.split(",");
      var len =  listOfDishes.length;
       if(len <=3){
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!" ;
      }
  }
  };
}

})();
