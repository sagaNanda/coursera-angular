(function () {
  'use strict';
  
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
  
  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'menuList.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
      
    };
  
    return ddo;
  }


  function FoundItemsDirectiveController() {
  
  }
  
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.logMenuItems = function (searchItem) {

        var promise = MenuSearchService.getMenuItems();
        promise.then(function (response) {
          var items=response.data.menu_items;
          menu.found=MenuSearchService.getMatchedMenuItems(searchItem,items);
        })
        .catch(function (error) {
          console.log(error);
        })
      };
  
      menu.removeItem = function (itemIndex) {
        console.log("'this' is: ", this);
        MenuSearchService.removeItem(itemIndex);
      };
  
  }

  

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    return response;
  };


  var found = [];
  
  service.getMatchedMenuItems= function (searchItem,items) {
    for (var i = 0; i < items.length; i++) {
      var description = items[i].description;
      if (description.toLowerCase().indexOf(searchItem) !== -1) {
        var item = {
          short_name: items[i].short_name,
          name: items[i].name,
          description: items[i].description
        };
        found.push(item);
      }
    }
    return found;
  };


  service.removeItem = function (itemIndex) {
    found.splice(itemIndex, 1);
  };

}

})();
