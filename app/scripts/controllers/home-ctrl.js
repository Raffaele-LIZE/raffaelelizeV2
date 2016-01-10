
app.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.carousels = [{
		title: 'IMG1',
		baseline: '...',
		img: 'http://lorempixel.com/1440/500/technics/'
	},
	{
		title: 'IMG2',
		baseline: '...',
		img: 'http://lorempixel.com/1440/500/technics/'
	},
	{
		title: 'IMG3',
		baseline: '...',
		img: 'http://lorempixel.com/1440/500/technics/'
	}];

	$scope.iconsTab = [
		{
			type : "outils",
			icons : [
				{ name: "Git", url: "images/icons/git.png"},
				{ name: "Npm", url: "images/icons/npm.png"},
				{ name: "Bower", url: "images/icons/bower.png"},
				{ name: "Grunt", url: "images/icons/grunt.png"},
				{ name: "Gulp", url: "images/icons/gulp.png"},
				{ name: "Yeoman", url: "images/icons/yeoman.png"},
				{ name: "Webpack", url: "images/icons/webpack.png"}
			]
		},
		{
			type : "front",
			icons : [
				{ name: "Html5", url: "images/icons/html5.png"},
				{ name: "Css3", url: "images/icons/css3.png"},
				{ name: "Javascript", url: "images/icons/javascript.png"},
				{ name: "JQuery", url: "images/icons/jquery.png"},
				{ name: "AngularJs", url: "images/icons/angularjs.png"},
				{ name: "Sass", url: "images/icons/sass.png"}
			]
		},
		{
			type : "mobile",
			icons : [
				{ name: "Cordova", url: "images/icons/cordova.png"},
				{ name: "Ionic", url: "images/icons/Ionic.png"},
				{ name: "Swift", url: "images/icons/swift.png"},
				{ name: "Android", url: "images/icons/android.png"},
				{ name: "Ios", url: "images/icons/ios.png"}
			]
		},
		{
			type : "back",
			icons : [
				{ name: "Php", url: "images/icons/php.png"},
				{ name: "Node", url: "images/icons/node.png"},
				{ name: "Symfony2", url: "images/icons/symfony.png"}
			]
		},
		{
			type : "cms",
			icons : [
				{ name: "Drupal", url: "images/icons/drupal.png"},
				{ name: "Wordpress", url: "images/icons/wordpress.png"}
			]
		},
		{
			type : "autres",
			icons : [
				{ name: "Ruby", url: "images/icons/ruby.png"},
				{ name: "Rails", url: "images/icons/rails.png"}
			]
		}
	];

	$scope.downloadSkills = ['Swift','Android','Webpack'];

	$(function() {
		$('#tagsphere').tagSphere({
			height: 300,
			width: 300,
			slower: 0.99,
			radius: 75,
			speed: 0.2,
			timer: 50
		});
	});
}]);
