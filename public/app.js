var myapp = angular.module('myapp', ['ngRoute', 'ngtweet']);

myapp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/views/home.html",
            controller: 'mainCtrl'
        })
        .when("/Test", {
            templateUrl: "/views/test_page.html",
            controller: 'homeCtrl'
        })
        .when("/Songs", {
            templateUrl: "/views/songs.html"
        })
        .when("/Beats", {
            templateUrl: "/views/beats.html"
        })
        .when("/About", {
            templateUrl: "/views/about.html",
            controller: 'mainCtrl'
        })
        .when("/Contact", {
            templateUrl: "/views/contact.html"
        })
        .when("/Photos", {
            templateUrl: "/views/photos.html"
        });


});

myapp.controller('mainCtrl', ['$scope','$timeout', function ($scope, $timeout) {

    $scope.names = {fname:'Jani', lname: 'Carl'};
  

}]);

myapp.controller('homeCtrl', ['$scope','firstService', 'Multiplier', function ($scope, firstService, Multiplier) {

    $scope.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];
    $scope.morelife = firstService.markup($scope.names[3]); 
    $scope.mul = Multiplier.multiply(5,8);

}]);

myapp.directive('myDirect', function () {
    return {
        restrict: 'E',
        templateUrl: 'my-dir',
         link: function (scope, attr, element) {
              $("#my_nanogallery2").nanogallery2({
                    "userID":                    "149035168@N08",
                    "kind":                      "flickr",
                    "photoset":                  "72157675219521270",
                    "thumbnailHeight":           200,
                    "thumbnailWidth":            200,
                    "galleryMosaic":             [
                                                   { "w": 5, "h": 3, "c": 2, "r": 1 },
                                                   { "w": 2, "h": 2, "c": 1, "r": 2 },
                                                   { "w": 2, "h": 2, "c": 7, "r": 2 },
                                                   { "w": 2, "h": 2, "c": 2, "r": 4 },
                                                   { "w": 3, "h": 4, "c": 4, "r": 4 },
                                                   { "w": 3, "h": 4, "c": 7, "r": 4 },
                                                   { "w": 2, "h": 2, "c": 10, "r": 5 },
                                                   { "w": 4, "h": 2, "c": 11, "r": 6 },
                                                 ],
                    "thumbnailGutterWidth":      0,
                    "thumbnailGutterHeight":     0,
                    "thumbnailBorderHorizontal": 5,
                    "thumbnailBorderVertical":   5,
                    "galleryMaxRows":            1,
                    "galleryDisplayMode":        "rows",
                    "galleryDisplayMode":        "pagination", 
                    "thumbnailLabel":            { "display" : false }
                  
              });
         }
        
    };
});

myapp.directive('myNextDirect', function () {
    return {
        restrict: 'E',
        templateUrl: 'yoo-plate'
    };
});

myapp.directive('underConstruct', function () {
    return {
        restrict: 'E',
         scope: {
             names: '='
         },
        template: '<p id="underConstruct">Sorry The Page You Are Trying {{names.fname + names.lname}} Reach Is Under Construction!This Page Will Be Available Soon.</p>'
       
    };
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

myapp.service('firstService', function(){
  
    this.markup = function(x){
        
        return x + x;
    }   
    
   
    
});

myapp.factory('Multiplier', function() {
   var factory = {};
   
   factory.multiply = function(a, b) {
      return a * b
   }
   
   return factory;
}); 


/*myapp.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
      console.log('Current route name: ' + $location.path());
      // Get all URL parameter
      console.log($routeParams);
    });
  }]);*/
