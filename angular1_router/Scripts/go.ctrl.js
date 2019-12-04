module.controller("goCtrl", GoCtrlCtor)

function GoCtrlCtor($scope, $state) {
    $scope.clickme = function () {
        $state.go("blue")
    }
}