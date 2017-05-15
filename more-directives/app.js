var app = angular.module("moreDirectivesApp", [])
.controller("mdController", mdController);//another way of adding controller

function mdController(){

    this.myList = [1,2,3,4,5];
    this.myList2 = ["val1","val2","val3"];

    //repeating through objects examples, like JSON data
    this.myList3 = [
        {'name':'Roshan', 'age':29},
        {'name':'Rosey', 'age':28},
        {'name':'Sarbesh', 'age':32},
    ];
}