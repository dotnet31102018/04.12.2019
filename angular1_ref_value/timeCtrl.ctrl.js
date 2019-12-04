
// timeCtrl will be the name to summon this ctrl to the html page
module.controller("timeCtrl", TimeCtrl)

// like class TimeCtrl
function TimeCtrl($scope, $rootScope) {

  $rootScope.obj = { x: 10 };

  $scope.obj = $rootScope.obj

  $scope.increase = () => {
    $scope.obj.x++
  }

}