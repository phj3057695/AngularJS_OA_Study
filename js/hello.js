var app = angular.module('scopeExApp',[]);
app.controller('ctrl1',['$scope',function ($scope){
    $scope.test = "Good Moring";
}])
app.controller('ctrl2',['$scope',function ($scope){
    $scope.test ="Good night"
}])