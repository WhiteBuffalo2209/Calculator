
let storageVal = '';
let initalVal;
let nextVal;
let mathOperator;
let buttonClicked;

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
    else if (mathOperator == '÷'){
        result = division(initialVal,nextVal);
    }
    return result;
}

function testFunction(e) {   //need checking
    let array = [];
    console.log(e.srcElement.childNodes[0].data);
    buttonClicked = e.srcElement.childNodes[0].data;
    if(buttonClicked === '+'){ //not working
        array.push(storageVal);
        array.push(buttonClicked);
        storageVal = '';
        console.log(array);
    }
    else{
        storageVal += buttonClicked;
    }
    
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',testFunction));

//e.srcElement.childNodes[0].data