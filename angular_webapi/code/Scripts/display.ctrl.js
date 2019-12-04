module.controller("DisplayCtrl", DisplayCtrlCtor)

function DisplayCtrlCtor($scope, $http) {

    $scope.movies = []
    $scope.updated = false
    const getData = () => {
        $http.get(`../api/movies`)
            .then(
                // success
                (resp) => {
                    $scope.movies = resp.data
                },
                // error
                (err) => {
                    alert('error')
                    console.log(err)
                }
            )

    }

    getData()

    $scope.delete = (index) => {
        $http.delete(`../api/movies/${index}`)
            .then(
                // success
                () => {
                    getData()
                },
                // error
                (err) => {
                    alert('error')
                    console.log(err)
                }
            )

    }

    $scope.update = (m) => {
        $http.put(`../api/movies/${m.Id}`, m)
            .then(
                // success
            (resp) => {
                getData()
                $scope.updated = true
                },
                // error
                (err) => {
                    alert('error')
                    console.log(err)
                }
            )
    }

}