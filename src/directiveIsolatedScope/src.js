angular.module('app',[])
.controller('ctr', ['$scope', function($scope){
        angular.merge($scope, {
           test: 'here'
        });

    }])
.directive('d1', [function(){
        return {
            restrict: 'AE',
            templateUrl: '/template.html',
            scope: {
                data1: '=',
                speakOut: '&',
            },
            link: function(scope, element, attr) {

            },
            controller: function(){

            }

        };
    }]);