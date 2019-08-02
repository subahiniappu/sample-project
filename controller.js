 function studentController($scope,$http) {
            var url = "/data1.txt";

            $http.get(url).then( function(response) {
               $scope.students = response.data;
            });
         }
