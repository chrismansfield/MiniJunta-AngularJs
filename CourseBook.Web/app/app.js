'use strict';

var courseBookApp = angular.module('courseBook', ['ngResource', 'ngRoute'])
.config(function ($routeProvider) {
    $routeProvider.when('/NewCourse', {
        controller: 'newCourseController',
        templateUrl: '/app/templates/new-course.html'
    }).when('/EditCourse/:id', {
        controller: 'newCourseController',
        templateUrl: '/app/templates/new-course.html'
        })
        .otherwise({
        templateUrl: '/app/templates/home.html',
        controller: 'homeController'
    });

    //$routeProvider.html5Mode(true);
});