
app.controller('HeaderCtrl', ['$scope', 'ContentService', function($scope, ContentService) {
	$scope.projects = ContentService.experiences;
}]);	