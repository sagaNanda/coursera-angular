(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);


// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.items = ShoppingListCheckOffService.getToBuyItems();

  list1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.addBoughtItem(list1.items[itemIndex].name,list1.items[itemIndex].quantity);
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  };
}
// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getBoughtItems();

  
}

function ShoppingListCheckOffService(boughtItems) {
  var service = this;
  // List of buy shopping items
  var toBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
  service.addBoughtItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
  };

  service.removeToBuyItem = function (itemIndex) {
      toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
  
      return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

function ShoppingListCheckOffServiceProvider() {
  var provider = this;
  provider.boughtItems=[];

  provider.$get = function () {
    var shoppingList = new ShoppingListCheckOffService(provider.boughtItems);

    return shoppingList;
  };
}
})();
