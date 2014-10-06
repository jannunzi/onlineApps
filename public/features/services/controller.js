app.controller("ApplicationsCtrl", [ "$scope", "$http", function ($scope, $http) {

    $scope.message = "Hello from controller";

    $scope.create = function () {
        $http.post("/applications", $scope.serviceClient)
		.success(function (response) {
		    $scope.all();
		});
    }

    $scope.renderServiceClients = function (response) {
        $scope.serviceClients = response;
    };

    $scope.remove = function (id) {
        $http.delete("/applications/" + id)
		.success(function (response) {
		    $scope.all();
		});
    };

    $scope.update = function () {
        $http.put("/applications/" + $scope.serviceClient._id, $scope.serviceClient)
		.success(function (response) {
		    $scope.all();
		});
    };

    $scope.select = function (id) {
        $http.get("/applications/" + id)
		.success(function (response) {
		    $scope.serviceClient = response;
		});
    };

    $scope.all = function () {
        $http.get("/applications")
		.success($scope.renderServiceClients);
    }

    $scope.all();
}]);
