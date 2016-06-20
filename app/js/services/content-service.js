app.factory('ContentService', function() {

  return {
    experiences: [{
      id: 0,
      name: 'Imagera',
      class: 'imagera',
      banner: 'images/banner_imagera.jpg',
      baseline: 'RÉACTIVITÉ, DISPONIBILITÉ ET COMPÉTITIVITÉ',
      description: 'Imagera est la première agence de photographes dotée d’un réseau international de 1 462 photographes et vidéastes professionnels. Ce réseau permet à l\'entreprise d\'être très compétitive et de proposer un panel de professionnels dans plusieurs domaines. Ainsi, imagera dispose de photographes spécialisés en publicité, évènementiel, photo culinaire, architecturale, etc. Aujourd’hui imagera est donc capable de mettre à votre disposition, partout en France, le ou les photographes professionnels spécialisés dans le domaine dont votre entreprise a besoin et cela à prix abordable.',
      site_url: 'http://www.imagera.fr/',
      works: [{
        title: 'Site de tirage photo en ligne',
        mission: 'En charge de la création d\'un site de tirage photo en ligne destiné au client d\'imagera. Mais aussi de plus site vitrine afin de booster le référencement',
        tools: ['html','css','Drupal 6'],
        problem: '',
        resolve: '',
        images: ['top-secret.png'],
        site_url: ''
      }]
    }, {
      id: 1,
      name: 'Groupe Consensus',
      class: 'groupe-consensus',
      banner: 'images/banner_groupe-consensus.jpg',
      baseline: 'Au coeur de l\'action !',
      description: 'Le Groupe Consensus propose au médecin et intéressé du monde entier de suivre toute l\'actus et innovation autour de la cardiologie à travers de nombreuses revues mais aussi de son site internet.',
      site_url: 'http://www.consensus-online.fr/',
      works: [{
        title: 'Newsletters',
        mission: 'En charge de la création, de l\'envoie et del\'analyse des différentes Newsletters',
        tools: ['html', 'css'],
        problem: 'Affichage différent suivant les boites mail.',
        resolve: '',
        images: ['newletters1.png'],
        site_url: ''
      },
      {
        title: 'Site Consensus Online',
        mission: 'En charge de la maintenance du site consensus-online.com et de l\'ajout de différents modules SPIP',
        tools: ['SPIP'],
        problem: '',
        resolve: '',
        images: ['consensus-online1.png'],
        site_url: ''
      },{
        title: 'Site Institutionnel Groupe Consensus',
        mission: 'En charge du développement du site Institutionnel groupeconsenus.fr',
        tools: ['Drupal 7'],
        problem: '',
        resolve: '',
        images: ['groupe-consensus1.png'],
        site_url: ''
      }]
    }, {
      id: 2,
      name: 'Pixel Cookers',
      class: 'pixel-cookers',
      banner: 'images/banner_pixel.jpg',
      baseline: 'L\'agence web super héroïque !',
      description: 'Agence de création graphique et de développement web, Pixel Cookers est basée à Neuville-sur-Oise dans la pépinière d\'entreprises, Neuvitec 95. Fondée par trois étudiants de l\'EISTI accompagnés d\'un créatif, l\'agence est composé d\'une équipe jeune, dynamique et travaille pour des boîtes aussi prestigieuses que TF1, IBM ou Albin Michel. Plus localement, Pixel Cookers a notamment été en charge de la direction artistique d\'ANPER95, portail numérique des collèges valdoisiens et a également refait du sol au plafond l\'identité graphique et le site internet de la base de loisirs de Cergy-Pontoise.',
      site_url: 'http://www.pixel-cookers.com/',
      works: [{
        id_work: 1,
        title: 'Bouygues Construction',
        mission: 'Développement en équipe d\'un intranet cross-platform pour les professionnels de chez Bouygues Construction afin qu\'ils puissent présenter et vendre leurs innovations à leurs clients',
        tools: ['Angular JS', 'Cordova'],
        problem: 'Apprentissage d\'Angular JS',
        resolve: '',
        images: ['top-secret.png'],
        site_url: ''
      }, {
        id_work: 2,
        title: 'Lazy Cookie',
        mission: 'Développement entier du site à l\'aide d\'une base de donnée existante.',
        tools: ['Wordpress'],
        problem: 'Rendre le site responsive.',
        resolve: '',
        images: ['lazycookie1.png'],
        site_url: ''
      }, {
        id_work: 3,
        title: 'Titoff',
        mission: 'Développement du site vitrine de Titoff pour sa tournée "15 ans de scène !"',
        tools: ['Wordpress'],
        problem: '',
        resolve: '',
        images: ['titoff1.png'],
        site_url: ''
      }, {
        id_work: 4,
        title: 'Les compagnons du devoir',
        mission: 'Développement en équipe du site institutionnel des compagnons du devoir, maintenance et évolutions',
        tools: ['Drupal 7'],
        problem: '',
        resolve: '',
        images: ['compagnons1.png'],
        site_url: ''
      }, {
        id_work: 5,
        title: 'Armines / Carnotmines',
        mission: 'Développement d\'un drupal multi-site pour les écoles Mines',
        tools: ['Drupal 7'],
        problem: '',
        resolve: '',
        images: ['mines1.png'],
        site_url: ''
      }, {
        id_work: 6,
        title: 'Microéconomix',
        mission: 'Implémentations d\'évolution sur le site Microéconomix',
        tools: ['Drupal 7'],
        problem: '',
        resolve: '',
        images: ['microeconomix1.png'],
        site_url: ''
      }, {
        id_work: 7,
        title: '#DEUXMAINS',
        mission: 'Développement d\'un site événementiel pour les compagnons du devoir et d\'un mini-jeux de endless runner',
        tools: ['Symfony 2','javascript','PandaJS'],
        problem: '',
        resolve: '',
        images: ['deuxmains1.png'],
        site_url: ''
      }]
    }, {
      id: 3,
      name: 'Mobile Spot',
      class: 'mobile-spot',
      banner: 'images/banner_mobile-spot.jpg',
      baseline: 'Mobile-Spot répond à votre besoin avec des applications sur mesure pour tout type de smartphone, tablette ou PC.',
      description: 'Vous gérez un lieu ou un événement et vous souhaitez faire gagner du temps à vos visiteurs, leur offrir plus d’opportunités, augmenter votre visibilité et en faire bénéficier les marques présentes.\n Forts de notre expérience dans la cartographie interactive et la géolocalisation indoor, nous avons développé Mobigeo® , un module qui comprend une fonction plan et itinéraire, doté de géolocalisation outdoor / indoor, et de services géolocalisés dont les geoGroupes® . Grâce à cette fonctionnalité très simple d’emploi, vos visiteurs peuvent partager et suivre leurs positions en temps réel. Cela leur permet de se retrouver très facilement dans votre lieu sans les contraintes d’un rendez-vous précis et de l’attente associée.',
      site_url: 'http://www.mobile-spot.com/',
      works: [{
        title: 'SDK(Software Development Kit) Mobigeo',
        mission: 'Conception et développement de nouvelles fonctionalité du SDK Mobigeo afin de le rendre plus souple et plus indispensable',
        tools: ['Vanilla JS','Npm','Bower','Grunt','Git'],
        problem: 'Chaque fonctionnalité doit être complétement indépendante des unes des autres.',
        resolve: 'Développement modulaire à l\'aide de pattern design(singleton et modul).',
        images: ['top-secret.png'],
        site_url: ''
      }, {
        title: 'Mobile Spot DÉMO',
        mission: 'Conception et développement d\'une application de démonstration de toutes les fonctionnalitées regroupé dans Mobigeo afin de faciliter et augmenter l\'impacte de notre solution lors des rendez-vous client',
        tools: ['Ionic','Cordova', 'SDK Mobigeo', 'Bower','Grunt','Git'],
        problem: 'Gestion des caches avec Ionic',
        resolve: 'Activion et désactivation du système de cache vers l\'avant que propose Ionic en fonction du parcours utilisateur sur l\'application',
        images: ['top-secret.png'],
        site_url: ''
      }, {
        title: 'Font Romeu & Pyrénnée 2000',
        mission: 'Conception et développement d\'une application mobile pour les stations de ski Font-Romeu et Pyrénnée 2000 dans le cadre d\'un POC(Proof of concept)',
        tools: ['Ionic','Cordova', 'SDK Mobigeo', 'Bower','Grunt','Git'],
        problem: '',
        resolve: '',
        images: ['top-secret.png'],
        site_url: ''
      }, {
        title: 'Micronora 2016',
        mission: 'Conception et développement d\'une application mobile le salon international des microtechniques. Ce salon très ciblé, réuni l\'ensemble de la filière microtechnique, et propose une offre multi-technologique très large, qui va de la R&D à la sous-traitance jusqu\'aux technologies de production.',
        tools: ['CakePHP','Cordova', 'Vanilla JS', 'Bower','Grunt','Git'],
        problem: '',
        resolve: '',
        images: ['top-secret.png'],
        site_url: ''
      }]
    }, {
      id: 4,
      name: 'Projets personnels',
      class: 'lab',
      banner: 'images/banner_personal-projects.jpg',
      baseline: 'Bienvenue dans le Lab',
      description: 'Tous le projets que vous trouverez dans cette section me permettre de tester des nouvelles techno, de nouvelles approche et son des projets cool mais sérieux. Enjoy ! =)',
      site_url: 'http://www.consensus-online.fr/',
      works: [{
        title: 'Raffaelelize.fr',
        mission: 'Conception de mon site Portfolio qui présente mes compétences et retrasse mes différentes expériences professionnels et personnels',
        tools: ['AngularJS','Npm','Bower','Gulp','Git'],
        problem: '',
        resolve: '',
        images: ['raffaelelize1.png'],
        site_url: ''
      },
      {
        title: 'MétroQuizz',
        mission: 'Réalisation d\'une application mobile cross-platform, culturel et historique lié au station de métro parisien',
        tools: ['AngularJS','Ionic','Npm','Bower','Gulp','Git'],
        problem: '',
        resolve: '',
        images: ['metroquizz1.png'],
        site_url: ''
      },
      {
        title: 'La Mine',
        mission: 'Conception et développement d\'une application mobile native IOS pour une association de ressourcerie ayant pour but de collecter et redistribuer des objets usagés',
        tools: ['Swift','CocoaPods','Git'],
        problem: '',
        resolve: '',
        images: ['la-mine1.png'],
        site_url: ''
      }]
    }]
  };
});
