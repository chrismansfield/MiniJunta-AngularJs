'use strict';

courseBookApp.directive('datepicker', function() {

    return {
        restrict: 'E',
        link: function($scope, $element, $attrs) {
            $element.attr('type', 'date');
        },
        template: '<input />',
        replace: true
    };

});

courseBookApp.directive('typeView', function() {

    return {
        restrict: 'EA',
        scope: {
            courseType: '=courseType'
        },
        link: function($scope) {
            $scope.courseTypes = {
                1: 'Utbildning',
                2: 'Aktivitet'
            }
        },
        replace: true,
        template: '<p>{{courseTypes[courseType]}}</p>'
};

});