'use strict';

/**
 * @ngdoc overview
 * @name fOneChampionsApp
 * @description
 * # fOneChampionsApp
 *
 * Main module of the application.
 */
angular
  .module('fOneChampionsApp', [
    'ngResource',
    'ngSanitize'
  ])
  .run(function ($rootScope) {
    /**
     * Initiating application strings and system language
     */
    $rootScope.appStrings = APP_STRINGS;
    $rootScope.lang = "en";
  });
