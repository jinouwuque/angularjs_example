angular.module('app',[])
.controller('ctr', ['$scope', function($scope){
        debugger;
        angular.merge($scope, {
           test: 'here'
        });

    }]);