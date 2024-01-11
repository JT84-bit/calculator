//Functions for calculations
multiply = (first, second) => first * second;
add = (first, second) => first + second;
substract = (first, second) => first - second;
divide = (first, second) => first / second;

//Keeps record for current variables
let operator = "";
let oldOperator = "";
let firstNumber = "";
let secondNumber = "";

//Backspace for display
displayDel = () => {
    let text = displayLine.textContent;
    if(secondNumber.length === 0 && operator != ""){
        text = text.slice(0, -3);
        operator = "";
    }else if(operator === ""){
        text = text.slice(0, -1);  
        firstNumber = firstNumber.slice(0, -1)
    }else{
        text = text.slice(0, -1);  
        secondNumber = secondNumber.slice(0, -1)
    }
    displayLine.textContent = text;
};

//Clears screen
displayClear = () => {
    displayLine.textContent = "";
    resultLine.textContent = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
    oldOperator = "";
}

//Calculate current numbers 
calculate = () => {
    first = firstNumber * 1;
    second = secondNumber * 1;
    switch(operator){
        case "+":
            result = add(first, second);
            oldOperator = "+" 
            break;
        case "-":
            result = substract(first, second);
            oldOperator = "-"
            break;
        case "*":
            result = multiply(first, second);
            oldOperator = "*"
            break;
        case "/":
            if(firstNumber === "0" || secondNumber === "0"){
                displayClear();
                displayLine.textContent = "ERROR"
            }else{
                result = divide(first, second);
                oldOperator = "/"
            }
    }
    if(result % 1 === 0){
        result = result.toString();
    }else{
        result = result.toFixed(2);
    }
    
    displayLine.textContent += " = " + result;
    resultLine.textContent = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
}

//Display lines
const displayLine = document.querySelector(".displayLine1")
const resultLine = document.querySelector(".displayLine2")

//Handles display
function display(arg){
    let text = displayLine.textContent;
    if(!isNaN(arg)){
        if(firstNumber.length < 10 && operator === "" && oldOperator === ""){
            displayLine.textContent += arg;
            firstNumber += arg;
        }else if(operator != "" && secondNumber.length < 10){
            displayLine.textContent += arg;
            secondNumber += arg;
        }
        return;
    };
      
    switch(arg){
        case "+":
            if(operator === "" && firstNumber != ""){
                displayLine.textContent += " + ";
                operator = "+";
            }else if(operator != ""){
                calculate();
                displayLine.textContent += " + ";
                operator = "+";
            }     
            break;   
        case "-":
            if(operator === "" && firstNumber != ""){
                displayLine.textContent += " - ";
                operator = "-";
            }else if(operator != ""){
                calculate();
                displayLine.textContent += " - ";
                operator = "-";
            }  
            break; 
        case "*":
            if(operator === "" && firstNumber != ""){
                displayLine.innerHTML += ' &times; ';
                operator = "*";
            }else if(operator != ""){
                calculate();
                displayLine.innerHTML += ' &times; ';
                operator = "*";
            }    
            break;  
        case "/":
            if(operator === "" && firstNumber != ""){
                displayLine.innerHTML += ' &divide; '
                operator = "/";
            }else if(operator != ""){
                calculate();
                displayLine.innerHTML += ' &divide; '
                operator = "/";
            }       
            break; 
        case ".":
            if(firstNumber != "" && operator == "" && firstNumber.indexOf(".") == -1){
                firstNumber += ".";
                displayLine.textContent += '.';
            }else if(operator != "" && secondNumber.indexOf(".") == -1){
                displayLine.textContent += '.';
                secondNumber += ".";
                break;
            }    
        case "=":
            if(firstNumber != "" && secondNumber != ""){
                calculate();
                let result = resultLine.textContent;
                displayClear();
                resultLine.textContent = result;
            }      
}};



// Number buttons
const button1 = document.querySelector(".button1")
button1.addEventListener("click", function() {display("1")});
const button2 = document.querySelector(".button2")
button2.addEventListener("click", function() {display("2")});
const button3 = document.querySelector(".button3")
button3.addEventListener("click", function() {display("3")});
const button4 = document.querySelector(".button4")
button4.addEventListener("click", function() {display("4")});
const button5 = document.querySelector(".button5")
button5.addEventListener("click", function() {display("5")});
const button6 = document.querySelector(".button6")
button6.addEventListener("click", function() {display("6")});
const button7 = document.querySelector(".button7")
button7.addEventListener("click", function() {display("7")});
const button8 = document.querySelector(".button8")
button8.addEventListener("click", function() {display("8")});
const button9 = document.querySelector(".button9")
button9.addEventListener("click", function() {display("9")});
const button0 = document.querySelector(".button0")
button0.addEventListener("click", function() {display("0")});

const buttondot = document.querySelector(".buttondot")
buttondot.addEventListener("click", function() {display(".")});


// Operation buttons
const buttonAdd = document.querySelector(".button-add")
buttonAdd.addEventListener("click", function() {display("+")});
const buttonMulti = document.querySelector(".button-multi")
buttonMulti.addEventListener("click", function() {display("*")});
const buttonDivide = document.querySelector(".button-divide")
buttonDivide.addEventListener("click", function() {display("/")});
const buttonSub = document.querySelector(".button-sub")
buttonSub.addEventListener("click", function() {display("-")});
const buttonEq = document.querySelector(".buttoneq")
buttonEq.addEventListener("click", function() {display("=")});


// Operations for display modification
const clear = document.querySelector(".clear")
clear.addEventListener("click", displayClear);
const del = document.querySelector(".delete")
del.addEventListener("click", displayDel);




