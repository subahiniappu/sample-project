function studentController($scope,$https:) {
   var url = "data.txt";

   $https:.get(url).success( function(response) {
      $scope.students = response; 
   });
}