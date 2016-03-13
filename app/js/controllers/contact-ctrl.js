app.controller('ContactCtrl', function($scope) {

  $scope.sendMail = function() {
    console.log('sendMail');
    var lastName = document.querySelector('#lastname').value,
        firstName = document.querySelector('#firstname').value,
        mail = document.querySelector('#mail').value,
        comment = document.querySelector('#comment').value;

    var link = 'mailto:raffaele.rdev@gmail.com' +
                '?subject=Contact from raffaelelize.fr' +
                '&body=' + lastName + ' ' + firstName + ' \n ' + mail +  ' \n ' + comment;

    window.location.href = link;
  }
});
