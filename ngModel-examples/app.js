var app = angular.module("ngModelExamples", []);
app.controller("ExamplesCtrl", ExamplesCtrl);

function ExamplesCtrl($scope){
    $scope.changeTrack = function(){
        $scope.feed = "you are being monitored..."
    }
}