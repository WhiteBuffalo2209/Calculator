
let initialVal;
let nextVal;
let mathOperator;

function addition(a,b){
    return +a + +b;
}
function subtraction(a,b){
    return +a - +b;
}
function multiplication(a,b){
    return +a * +b;
}
function division(a,b){
    return +a / +b;
}
function operate(){ //need checking
    initialVal = prompt('Enter inital value:');
    mathOperator = prompt('Enter math operator:');
    nextVal = prompt('Enter next value:');
    let result;
    if(mathOperator == '+'){
        result = addition(initialVal,nextVal); //need checking
    }
    return result;
}