
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

function testFunction(e) {   //need checking
    console.log(e.srcElement.childNodes[0].data);
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',testFunction));

//e.srcElement.childNodes[0].data