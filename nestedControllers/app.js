var app = angular.module("nestedControllers", []);

app.controller("Ctrl1", Ctrl1);
app.controller("Ctrl2", Ctrl2);

/* ng-controller way 
function Ctrl1($scope){
    $scope.testProp = "from Ctrl 1";
}
function Ctrl2($scope){
    $scope.testProp = "from Ctrl 2";
}
*/
// controller as syntax way
function Ctrl1(){
    //imaging there is line: var this = $scope;
    this.testProp = "from Ctrl 1";
}
function Ctrl2(){
    //imaging there is line: var this = $scope;
    this.testProp = "from Ctrl 2";
}