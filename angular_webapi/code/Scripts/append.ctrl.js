module.controller("AppendCtrl", AppendCtrlCtor)

function AppendCtrlCtor($scope, $state, $http) {
    $scope.movie = {}
    $scope.appendme = ()=> {
        $http.post(`../api/movies`, $scope.movie)
            .then(
                // success
            (resp) => {
                    $state.go('display')
                },
                // error
                (err) => {
                    alert('error')
                    console.log(err)
                }
            )
    }
}