
app.controller('ProjectCtrl', ['$scope','$state','$stateParams', 'ContentService', function($scope, $state, $stateParams, ContentService) {

  // Get the project ID
  $scope.idProject = $stateParams.id;
  // Get all works experience by ID
  $scope.works = ContentService.experiences[$scope.idProject].works;
}]);	