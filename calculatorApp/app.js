var app = angular.module("calculatorApp", []);
app.controller("controller1", controller1);

function controller1(){

    this.operation = '+';
    this.result = '0';
    this.operationSign = function(sign){
        this.operation = sign;
    }           

    this.execute = function(){
        var input1 = parseFloat(this.val1);
        var input2 = parseFloat(this.val2);

        if(this.operation==='+'){
            this.result = input1 + input2;
        }
        else if(this.operation==='-'){
            this.result = input1 - input2;
        }      
        else if(this.operation==='*'){
            this.result = input1 * input2;
        } 
        else{
            this.result = input1 / input2;
        }          
    }
}