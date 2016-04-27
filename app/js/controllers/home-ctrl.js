app.controller('HomeCtrl', ['$scope', function($scope) {

  // fake console log
  console.log('Ce console log est-il volontaire ? À vous d\'en jugez ! =p');

  $scope.carousels = [{
    title: 'Métro Quizz',
    baseline: 'Quizz culturel et historique sur les stations du métro parisien destiné à la RATP.',
    img: 'images/carousel/metroquizz.jpg'
  },
  {
    title: '#DEUXMAINS',
    baseline: 'Projet promotionnel des Compagnons du Devoir. Qu\'est ce que vous êtes capable de faire de vos deux mains ?!',
    img: 'images/carousel/deuxmains.jpg'
  },
  {
    title: 'Armines / Carnot Mines',
    baseline: 'Site officiel des écoles Mines, Armines & Carnotmines',
    img: 'images/carousel/armines.jpg'
  },
  {
    title: 'Compagnons du devoir',
    baseline: 'Site institutionnel des compagnons du devoir',
    img: 'images/carousel/compagnons-du-devoir.jpg'
  },
  {
    title: 'Titoff, 15 ans de scène',
    baseline: 'Site vitrine pour la promotion de la dernière tournée de Titoff',
    img: 'images/carousel/titoff.jpg'
  }];

  $scope.iconsTab = [{
    type: "outils",
    icons: [{
      name: "Git",
      url: "images/icons/git.png"
    }, {
      name: "Npm",
      url: "images/icons/npm.png"
    }, {
      name: "Bower",
      url: "images/icons/bower.png"
    }, {
      name: "Grunt",
      url: "images/icons/grunt.png"
    }, {
      name: "Gulp",
      url: "images/icons/gulp.png"
    }, {
      name: "Yeoman",
      url: "images/icons/yeoman.png"
    }, {
      name: "Webpack",
      url: "images/icons/webpack.png"
    }]
  }, {
    type: "front",
    icons: [{
      name: "Html5",
      url: "images/icons/html5.png"
    }, {
      name: "Css3",
      url: "images/icons/css3.png"
    }, {
      name: "Javascript",
      url: "images/icons/javascript.png"
    }, {
      name: "JQuery",
      url: "images/icons/jquery.png"
    }, {
      name: "AngularJs",
      url: "images/icons/angularjs.png"
    }, {
      name: "Sass",
      url: "images/icons/sass.png"
    }]
  }, {
    type: "mobile",
    icons: [{
      name: "Cordova",
      url: "images/icons/cordova.png"
    }, {
      name: "Ionic",
      url: "images/icons/Ionic.png"
    }, {
      name: "Swift",
      url: "images/icons/swift.png"
    }, {
      name: "Android",
      url: "images/icons/android.png"
    }, {
      name: "Ios",
      url: "images/icons/ios.png"
    }]
  }, {
    type: "back",
    icons: [{
      name: "Php",
      url: "images/icons/php.png"
    }, {
      name: "Node",
      url: "images/icons/node.png"
    }, {
      name: "Symfony2",
      url: "images/icons/symfony.png"
    }]
  }, {
    type: "cms",
    icons: [{
      name: "Drupal",
      url: "images/icons/drupal.png"
    }, {
      name: "Wordpress",
      url: "images/icons/wordpress.png"
    }]
  }, {
    type: "autres",
    icons: [{
      name: "Ruby",
      url: "images/icons/ruby.png"
    }, {
      name: "Rails",
      url: "images/icons/rails.png"
    }]
  }];

  $scope.downloadSkills = [{
      name:'Swift',
      progress: '50%'
    },
    {
      name:'Android',
      progress: '60%'
    },
    {
      name:'Webpack',
      progress: '20%'
    },
    {
      name:'NodeJs',
      progress: '70%'
    }
  ];

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      loop: true,
      center: true,
      dots: true,
      nav: true,
    });
  });

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
