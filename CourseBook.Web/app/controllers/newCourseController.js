'use strict';

courseBookApp.controller('newCourseController',
    function ($scope, $routeParams, courseService, courseTypeService) {

        var isNew = !$routeParams.id;

        if (!isNew) {
            courseService.getSpecificCourse($routeParams.id)
            .then(function(course) {
                $scope.name = course.Name;
                $scope.description = course.Description;
                $scope.type = course.CourseType;
            });
        };

        $scope.type = 1;

        courseTypeService.getCourseTypes().then(function (types) {
            $scope.courseTypes = types;
        });

        $scope.saveCourse = function() {
            courseService.saveCourse({
                Name: $scope.name,
                Description: $scope.description,
                CourseType: $scope.type
            }).then(function(data) {
                alert("Saved!, the new id is " + data.CourseId);
            });
        }

    });