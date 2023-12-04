
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
        result = addition(initialVal,nextVal);
    }
    else if (mathOperator == '-'){
        result = subtraction(initialVal,nextVal);
    }
    else if (mathOperator == '*'){
        result = multiplication(initialVal,nextVal);
    }
    else if (mathOperator == '/'){
        result = division(initialVal,nextVal);
    }
    return result;
}

function testFunction() {   //need checking
    console.log('hello');
}
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click',testFunction);