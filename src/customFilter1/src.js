angular.module('app',[])
.controller('ctr', ['$scope', function($scope){
        angular.merge($scope, {
            list: [
                {name: 'Tom', age: 10},
                {name: 'Jerry', age: 21},
                {name: 'Steve', age: 32},
                {name: 'Jefferson', age: 44}
            ]
        });

    }])
.filter('customeFilter', [function(){
        return function(list, num){
            var result = list;
            if(typeof num == 'number'){
                result = list.filter(function(v,k){
                    return v.age % num === 0;
                });
            }

            return result;
        };
    }]);