/*angular.module('dellUiComponents').directive('equalizeHeight', [
  '$timeout',
  '$rootScope',
  function ($timeout, $rootScope) {
    // Runs during compile
    return {
      restrict: 'A',
      link: function ($scope, $element, $attrs, controller) {
        var selector = $attrs.equalizeHeight;
        if (selector) {
          $timeout(function () {
            $(selector).matchHeight();
          }, 300);
        } else {
          console.error('equalize-height usage error. Must include css selector to identify objects to equalize. Example: cequalize-height=".classname"');
        }
      }
    };
  }
]);*/

/******************************************
 Needed for demo, do not delete!
*******************************************/
(function($){

  $('[data-target="#truncated-list-sample"] .show-collapsed, [data-target="#truncated-list-sample-expand"] .show-collapsed').click(function(e){
    $(e.currentTarget).parents('.equalize').height('auto');
  });
  
})(jQuery);