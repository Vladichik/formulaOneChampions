'use strict';

/**
 * @ngdoc function
 * @name fOneChampionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fOneChampionsApp
 */
angular.module('fOneChampionsApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$http', '$filter', '$preloader', function ($scope, $rootScope, $http, $filter, $preloader) {
    $scope.activeYear = $rootScope.appStrings.years[0].value;

    /**
     * This $emit listener, fires it receives $emit action
     * from switchYear directive and then calls fetching method
     */
    $scope.$on("setActiveYear", function (evt, year) {
      $scope.activeYear = year;
      $scope.$apply();
      $scope.fetchResults(year);
    });

    /**
     * This method fetches races data for specific year from the server
     * @param year - String selected year
     */
    $scope.fetchResults = function (year) {
      var header = angular.element(".bba-years-list");
      var yearsList = angular.element(".bba-years-list");
      $preloader.addPreloader(header, yearsList);
      $http.get("http://ergast.com/api/f1/" + year + "/results.json").then(function success(result) {
        $preloader.removePreloader();
        if (result && !result.data.error) {
          $scope.updateArrayOfDrivers(result.data.MRData.RaceTable.Races);
        }
      }, function fail() {
        $preloader.removePreloader();
      });
    };

    /**
     * This method generates array of winners. Map function picks driver that has
     * position = 1 from each race, appends some useful data to this object and then
     * pushes it into the arrayOfWinners
     * @param races - array of races objects received from the server
     */
    $scope.updateArrayOfDrivers = function (races) {
      $scope.arrayOfDrivers = [];
      races.map(function (race) {
        var winner = $filter("getObject")(race.Results, "position", "1");
        if (winner != null) {
          winner.raceName = race.raceName;
          winner.season = race.season;
          $scope.arrayOfDrivers.push(winner);
        }
      });
    };

    /**
     * This method fetches winners data when application loads
     */
    $scope.fetchResults($scope.activeYear);

  }])
  /**
   * This directive listens to
   * click events on year buttons and $emits
   * event with required value
   */
  .directive('switchYear', function () {
    return {
      link: function (scope, element) {
        element.on("click", function () {
          scope.$emit("setActiveYear", scope.year.value);
        })
      }
    }
  })
  /**
   * This directive changes current application language
   */
  .directive('switchLang', function ($rootScope) {
    return function(scope, element){
      element.on("click", function () {
        $rootScope.lang = scope.lng.iso;
        scope.$parent.$parent.$apply();
      })
    }
  });
