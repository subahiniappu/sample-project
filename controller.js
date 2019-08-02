function studentController($scope,$https:) {
   var url = "data1.txt";

   $https:.get(url).success( function(response) {
      $scope.students = response; 
   });
}
