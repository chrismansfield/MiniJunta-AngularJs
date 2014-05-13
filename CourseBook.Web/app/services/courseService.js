'use strict';

courseBookApp.factory('courseService', function($resource, $q) {

    var courseResource = $resource('/api/Course');

    return {
        getAllCourses: function() {
            var deferred = $q.defer();
            courseResource.query({}, deferred.resolve, deferred.reject);
            return deferred.promise;
        },
        getSpecificCourse: function(id) {
            var deferred = $q.defer();
            courseResource.get({id: id}, deferred.resolve, deferred.reject);
            return deferred.promise;
        },
        saveCourse: function(course) {
            var deferred = $q.defer();
            courseResource.save({}, course, deferred.resolve, deferred.reject);
            return deferred.promise;
        }
    }


});

courseBookApp.factory('courseTypeService', function($resource, $q) {

    var courseResource = $resource('/api/CourseTypes');

    return {
        getCourseTypes: function() {
            var deferred = $q.defer();
            courseResource.query({},deferred.resolve, deferred.reject);
            return deferred.promise;
        }
    };


});