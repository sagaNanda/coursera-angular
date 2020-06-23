(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


ShoppingListService.$inject = ['$http', 'ApiBasePath']
function ShoppingListService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };
}

})();
