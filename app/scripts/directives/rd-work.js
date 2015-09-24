
app.directive('rdWork', function() {
  return {
    restrict : 'A',
    templateUrl : 'views/directives/work.html',
    replace : false,
    scope :  {
      work: '='
    },
    link : function(scope, element, attrs) {
      console.log('In Linl function rdWork', scope.work);
      return scope.work;
    }
  }
});