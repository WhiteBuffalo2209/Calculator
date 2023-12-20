
let storageVal = '';
let buttonClicked;
let buttonArray = [];

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
function operate(){
    for(i=0;i<buttonArray.length-1;i++){   //need to make new function, too long
        if(buttonArray[i] === '+'){         //need to add multiplication and also divison
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
        operate();
    }
    else{
        storageVal += buttonClicked;
    }
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click',testFunction));

//e.srcElement.childNodes[0].data