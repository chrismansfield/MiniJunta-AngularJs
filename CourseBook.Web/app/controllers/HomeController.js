'use strict';

courseBookApp.controller('homeController', ['$scope', 'courseService',
    function ($scope, courseService) {

    $scope.courseTypes = {
        1: 'Utbildning',
        2: 'Aktivitet'
    };

    courseService.getAllCourses().then(function(courses) {
        $scope.courses = courses;
    });

}]);