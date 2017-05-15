var app = angular.module("myApp", []);
app.controller("myController", getTime);

function getTime($scope){
    var time = new Date();
    $scope.currentTime  = time.toTimeString();
    $scope.userName = "";
    //even funtion need to be kept in scope
    $scope.updateTime = function(){
        var newTime = new Date();
        $scope.currentTime = newTime.toTimeString();
    }
    console.log("success!!!");
}