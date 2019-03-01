(function() {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  var myapp = angular.module('api.users', []);
  myapp.factory('Users', function() {
    var Users = {};

    // Users.method = function() {};

    return Users;
  });
      
      myapp.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
           
                c = c + '+'
           
            txt += c;
        }
        return txt;
    };
});
})();