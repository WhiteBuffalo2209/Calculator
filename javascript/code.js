
let storageVal = '';
let buttonClicked;
let buttonArray = [];
let keyClicked;

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

function doubleDotInputChecker(){
    if (storageVal.includes('.') && buttonClicked === '.'){
        buttonClicked = '';
    }
    else if (storageVal.includes('.') && keyClicked === '.'){
        keyClicked = '';
    }
}

function operate(){
    for(i=0;i<buttonArray.length-1;i++){
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
            buttonArray = [];
            storageVal = '';
        }
    }
    else if (buttonClicked === 'Clear'){
        buttonArray = [];
        storageVal = '';
        display.textContent = 0;
    }
    else{
        doubleDotInputChecker();
        storageVal += buttonClicked;
    }
}

function disableNonMathKeys(val){
    let array = ['NumLock','/','*','-','+','Enter','.','0','1','2','3','4','5','6','7','8','9'];
    if (!(array.includes(val))){
        keyClicked = '';
    }
}

function inputKeyboard(e){
    keyClicked = e.key;
    console.log('This key was pressed: ',keyClicked);
    disableNonMathKeys(keyClicked);
    display.textContent = keyClicked;
    if(keyClicked === '+' || keyClicked === '-' || keyClicked === '*' || keyClicked === '÷'){
        buttonArray.push(storageVal);
        buttonArray.push(keyClicked);
        storageVal = '';
        console.log(buttonArray);
    }
    else if (keyClicked === 'Enter'){
        if (storageVal === ''){
            display.textContent = 0;
        }
        else{
            buttonArray.push(storageVal);
            console.log(buttonArray);
            operate();
            buttonArray = [];
            storageVal = '';
        }
    }
    else if (keyClicked === 'NumLock'){
        buttonArray = [];
        storageVal = '';
        display.textContent = 0;
    }
    else{
        doubleDotInputChecker();
        storageVal += keyClicked;
    }
}

function buttonChangeColor(){
    console.log('hover hover');
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',initiateCalculator));
//buttons.forEach(button => button.addEventListener('hover',buttonChangeColor));


const display = document.querySelector('.display');

window.addEventListener('keyup', inputKeyboard);
