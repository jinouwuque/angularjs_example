angular.module('app',[])
.controller('ctr', ['$scope', function($scope){
        angular.merge($scope, {
           test: 'here'
        });

    }])
    .directive("simple", function(){
        return {
            restrict: "EA",
            //transclude:true,
            template:"<div>{{label}}<div ng-transclude></div></div>",

            link: function(scope, element, attrs, controller, transcludeFn){
                // compile function and link function are being called either once
                debugger;
                // attacth the data to the directive
            },
            compile: function(element, attributes){
                console.log("angular compile the directive");
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn){
                        debugger;
                    },
                    post: function(scope, element, attributes, controller, transcludeFn){
                        debugger;
                    }
                };
                // compilation phase is Angular returns the template function
            },
            controller: function($scope){
                debugger;

            }
        };
    });