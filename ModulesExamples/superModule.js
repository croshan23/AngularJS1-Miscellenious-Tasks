var app = angular.module("superModule", []);

app.controller("HelloCtrl", HelloCtrl);

function HelloCtrl(){
    this.helloMessage = "I'm from the main module";
}