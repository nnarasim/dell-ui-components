angular.module('plunker', [])

  .factory('plunkGenerator', function ($document) {

    return function (version, module, content) {

      var form = angular.element('<form style="display: none;" method="post" action="http://plnkr.co/edit/?p=preview" target="_blank"></form>');
      var addField = function (name, value) {
        var input = angular.element('<input type="hidden" name="' + name + '">');
        input.attr('value', value);
        form.append(input);
      };

      var indexContent = function (content, version) {
        return '<!doctype html>\n' +
          '<html ng-app="plunker">\n' +
          '  <head>\n' +
          '    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular.js"></script>\n' +
          '    <script src="http://joshdmiller.github.com/angular-placeholders/angular-placeholders-'+version+'.js"></script>\n' +
          '    <script src="example.js"></script>\n' +
          '    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css" rel="stylesheet">\n' +
          '  </head>\n' +
          '  <body>\n\n' +
          content + '\n' +
          '  </body>\n' +
          '</html>\n';
      };

      var scriptContent = function(content) {
        return "angular.module('plunker', ['placeholders']);" + "\n" + content;
      };

      addField('description', 'http://joshdmiller.github.com/angular-placeholders/');
      addField('files[index.html]', indexContent(content.markup, version));
      addField('files[example.js]', scriptContent(content.javascript));

      $document.find('body').append(form);
      form[0].submit();
      form.remove();
    };
  })

  .controller('PlunkerCtrl', function ($scope, plunkGenerator) {

    $scope.content = {};

    $scope.edit = function (version, module, plunker) {
      plunkGenerator(version, module, $scope.content);
    };
  })

  .directive('plunkerContent', function () {
    return {
      link:function (scope, element, attrs) {
        scope.$parent.content[attrs.plunkerContent] = element.text();
      }
    };
  });
