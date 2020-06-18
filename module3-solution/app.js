(function () {
  'use strict';
  
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('NarrowItDownService', NarrowItDownService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
  
  
  NarrowItDownController.$inject = ['NarrowItDownService'];
  function NarrowItDownController(NarrowItDownService) {
    var menu = this;
  
    var promise = NarrowItDownService.getMenuCategories();
  
    promise.then(function (response) {
      menu.categories = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  
    menu.logMenuItems = function (shortName) {
      var promise = NarrowItDownService.getMenuForCategory(shortName);
  
      promise.then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    };
  
  }

  

NarrowItDownService.$inject = ['$http', 'ApiBasePath'];
function NarrowItDownService($http, ApiBasePath) {
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
