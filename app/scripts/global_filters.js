'use strict';

angular.module('fOneChampionsApp')
/**
 * Generic filter that built to find some object by required field. Useful and faster way to find single
 * object in Array. For instance I use it to find winner of each race.
 */
  .filter('getObject', function () {
    return function (collection, position, value) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i][position] === value) {
          return collection[i];
        }
      }
      return null;
    };
  });
