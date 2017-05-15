//importing another module to this module
//can even add more module
//used in large projects for clarity
var app = angular.module("appModule", ["superModule","ngTagsInput"]);


//using others external modules
app.controller("outsideCtrl", MainCtrl);

function MainCtrl(){
    this.tags = [
    { text: 'cisco' },
    { text: 'juniper' },
    { text: 'Huawei' }
  ];
}