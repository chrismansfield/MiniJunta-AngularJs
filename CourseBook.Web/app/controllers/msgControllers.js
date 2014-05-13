'use strict';

courseBookApp.controller('textController', function($scope, $rootScope) {
    $scope.text = "";

    $scope.$on('inputChanged', function(event, data) {
        $scope.text += data;
    });

});


courseBookApp.controller('inputController', function ($scope, $rootScope) {
    $scope.input = "HERRO!";
    $scope.$watch('input', function() {
        $rootScope.$broadcast('inputChanged', $scope.input);
    });
});