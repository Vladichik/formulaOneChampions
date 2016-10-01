angular.module('fOneChampionsApp')
/**
 * This service generates preloader.
 * Service can be used anywhere in the app where preloader is needed
 */
.service('$preloader', function () {
  this.addPreloader = function (container, elementToBlock) {
    container.append('<div class="bba-rounded-spin"></div>');
    if (elementToBlock !== null) {
      elementToBlock.addClass("bba-preloader-waiting");
    }
  };
  this.removePreloader = function () {
    angular.element(".bba-rounded-spin").remove();
    angular.element(".bba-preloader-waiting").removeClass("bba-preloader-waiting");
  };
});
