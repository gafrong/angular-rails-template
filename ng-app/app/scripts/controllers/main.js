'use strict';

/**
 * @ngdoc function
 * @name teachappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teachappApp
 */
angular.module('teachappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
