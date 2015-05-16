'use strict';

/**
 * @ngdoc function
 * @name teachappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the teachappApp
 */
angular.module('teachappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
