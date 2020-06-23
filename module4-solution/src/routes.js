(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Category Details
  .state('mainList', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      categories: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getMenuCategories();
      }]
    }
  })

  // Item detail
  .state('mainList.itemDetail', {
    url: '/items/{itemId}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams','ShoppingListService', 
              function ($stateParams,ShoppingListService) {
                  return ShoppingListService.getMenuForCategory($stateParams.itemId);
              }
            ]
    }
  });

}

})();
