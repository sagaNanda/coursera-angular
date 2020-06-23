(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);
ItemDetailController.$inject = ['items'];
function ItemDetailController(items) {
  var itemDetail = this;
  itemDetail.items=items.data;
  itemDetail.menu_items=items.data.menu_items;
  console.log(itemDetail.items);
  console.log(itemDetail.menu_items);
}

})();
