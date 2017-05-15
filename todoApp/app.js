var app = angular.module("todoApp", []);
app.controller("todoCtrl", TodoCtrl);

function TodoCtrl(){

    this.editMode = false;

    this.todos = [
        "Learn Angular 1",
        "Try Exercises",
        "Career work",
    ];

    this.addNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }

    this.executeEdit = function(){
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index, 1);
    }
}