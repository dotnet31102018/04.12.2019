
// timeCtrl will be the name to summon this ctrl to the html page
module.controller("brotherCtrl", BrotherCtrl)

// like class TimeCtrl
function BrotherCtrl($scope, $rootScope) {

  $scope.obj = $rootScope.obj

}