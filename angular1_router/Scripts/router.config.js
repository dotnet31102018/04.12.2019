
// http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
module.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

//another example doing it using text/ng-template
module.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("red", {
            url: "/red",
            templateUrl: "red",
            controller: "RedCtrl as red"
        })
        .state("blue", {
            url: "/blue", 
            templateUrl: "blue",
            controller: "BlueCtrl as blue"
        })

    //$urlRouterProvider.when("", "/main");
    //$urlRouterProvider.otherwise('/404');
});
