
// http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
module.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

//another example doing it using text/ng-template
module.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("display", {
            url: "/display",
            templateUrl: "display",
            controller: "DisplayCtrl"
        })
        .state("append", {
            url: "/append", 
            templateUrl: "append",
            controller: "AppendCtrl"
        })

    $urlRouterProvider.when("", "/display");
    //$urlRouterProvider.otherwise('/404');
});
