
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
    buttonClicked = e.srcElement.childNodes[0].data;
    console.log(buttonClicked);
    if(buttonClicked === '+' || buttonClicked === '-' || buttonClicked === '*' || buttonClicked === '÷'){
        buttonArray.push(storageVal);
        buttonArray.push(buttonClicked);
        storageVal = '';
        console.log(buttonArray);
    }
    else if (buttonClicked === 'Equals'){
        buttonArray.push(storageVal);
        console.log(buttonClicked);
        console.log(buttonArray);
        let initial;
        let next;
        let result;
        for(i=0;i<buttonArray.length-1;i++){   //need to make new function, too long
            if(buttonArray[i] === '+'){
                if(i>=3){
                    initial = result;
                    next = buttonArray[i+1];
                    result = addition(initial,next);
                    console.log(`next ${next} initial ${initial} answer ${result}`); 
                }
                else{
                    initial = buttonArray[i-1];
                    next = buttonArray[i+1];
                    result = addition(initial,next);
                    console.log(`next ${next} initial ${initial} answer ${result}`); 
                }
                
            }
            else if(buttonArray[i] === '-'){
                if(i>=3){
                    initial = result;
                    next = buttonArray[i+1];
                    result = subtraction(initial,next);
                    console.log(`next ${next} initial ${initial} answer ${result}`); 
                }
                else{
                    initial = buttonArray[i-1];
                    next = buttonArray[i+1];
                    result = subtraction(initial,next);
                    console.log(`next ${next} initial ${initial} answer ${result}`); 
                }
            }
            
        }
    }
    else{
        storageVal += buttonClicked;
    }
    
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',testFunction));

//e.srcElement.childNodes[0].data