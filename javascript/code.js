
let storageVal = '';
let buttonClicked;
let buttonArray = [];

let initalVal;
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
    else if (mathOperator == '÷'){
        result = division(initialVal,nextVal);
    }
    return result;
}

function testFunction(e) {
    console.log(e.srcElement.childNodes[0].data);
    buttonClicked = e.srcElement.childNodes[0].data;
    if(buttonClicked === '+'){
        buttonArray.push(storageVal);
        buttonArray.push(buttonClicked);
        storageVal = '';
        console.log(buttonArray);
    }
    else if (buttonClicked === 'Equals'){
        buttonArray.push(storageVal);
        console.log(buttonClicked);   // already have arrays with add operators and values
    }
    else{
        storageVal += buttonClicked;
    }
    
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',testFunction));

//e.srcElement.childNodes[0].data