
let storageVal = '';
let buttonClicked;
let buttonArray = [];

let initial;
let next;
let result;

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

function decimalChecker(value){
    if (value === Math.floor(value)){
        return value;
    }
    else {
        return value.toFixed(2);
    }
}

function operate(){
    for(i=0;i<buttonArray.length-1;i++){   //need to make this shorter code
        if(buttonArray[i] === '+'){        
            if(i>=3){
                initial = result;
                next = buttonArray[i+1];
                result = addition(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`); 
                display.textContent = decimalChecker(result);
            }
            else{
                initial = buttonArray[i-1];
                next = buttonArray[i+1];
                result = addition(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`); 
                display.textContent = decimalChecker(result);
            }
        }
        else if(buttonArray[i] === '-'){
            if(i>=3){
                initial = result;
                next = buttonArray[i+1];
                result = subtraction(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`);
                display.textContent = decimalChecker(result);
            }
            else{
                initial = buttonArray[i-1];
                next = buttonArray[i+1];
                result = subtraction(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`);
                display.textContent = decimalChecker(result);
            }
        }
        else if(buttonArray[i] === '*'){
            if(i>=3){
                initial = result;
                next = buttonArray[i+1];
                result = multiplication(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`);
                display.textContent = decimalChecker(result);
            }
            else{
                initial = buttonArray[i-1];
                next = buttonArray[i+1];
                result = multiplication(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`);
                display.textContent = decimalChecker(result);
            }
        }
        else if(buttonArray[i] === '÷'){
            if(i>=3){
                initial = result;
                next = buttonArray[i+1];
                result = division(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`);
                display.textContent = decimalChecker(result);
            }
            else{
                initial = buttonArray[i-1];
                next = buttonArray[i+1];
                result = division(initial,next);
                console.log(`next ${next} initial ${initial} answer ${result}`);
                display.textContent = decimalChecker(result);
            }
        }
    }
}

function initiateCalculator(e) {
    buttonClicked = e.srcElement.childNodes[0].data;
    console.log('This button was clicked: ',buttonClicked);
    display.textContent = buttonClicked; 
    if(buttonClicked === '+' || buttonClicked === '-' || buttonClicked === '*' || buttonClicked === '÷'){
        buttonArray.push(storageVal);
        buttonArray.push(buttonClicked);
        storageVal = '';
        console.log(buttonArray);
    }
    else if (buttonClicked === 'Equals'){
        if (storageVal === ''){
            display.textContent = 0;
        }
        else{
            buttonArray.push(storageVal);
            console.log(buttonArray);
            operate();
        }
    }
    else if (buttonClicked === 'Clear'){
        buttonArray = [];
        storageVal = '';
        display.textContent = 0;
    }
    else{
        storageVal += buttonClicked;
    }
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',initiateCalculator));

const display = document.querySelector('.display');


//e.srcElement.childNodes[0].data
// decimal checker 12.3.56.5
//Add a “backspace” button, so the user can undo if they click the wrong number.
//Add keyboard support! 