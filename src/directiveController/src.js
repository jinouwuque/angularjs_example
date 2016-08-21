angular.module('app',[])
.controller('ctr', ['$scope', function($scope){
        angular.merge($scope, {
           test: 'here'
        });

    }]);