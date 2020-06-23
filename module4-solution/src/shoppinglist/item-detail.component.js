(function () {
    'use strict';
    
    angular.module('Item-detail')
    .component('item-detail', {
      templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();