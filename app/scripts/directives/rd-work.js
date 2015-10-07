
app.directive('rdWork', function() {
  return {
    restrict : 'A',
    templateUrl : 'views/directives/work.html',
    replace : false,
    scope :  {
      work: '='
    }
  };
});