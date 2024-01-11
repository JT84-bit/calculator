
multiply = (first, second) => first * second;
add = (first, second) => first + second;
substract = (first, second) => first + second;
divide = (first, second) => first / second;

let operator = "";
let oldOperator = "";
let firstNumber = "";
let secondNumber = "";

displayDel = () => {
    let text = displayLine.textContent;
    text = text.slice(0, -1);
    displayLine.textContent = text;
};

displayClear = () => {
    displayLine.textContent = "";
    resultLine.textContent = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
}

calculate = () => {
    first = parseInt(firstNumber);
    second = parseInt(secondNumber);
    switch(operator){
        case "+":
            result = add(first, second);
            result = result.toString();
            resultLine.textContent = result;
            firstNumber = result.toString();
            operator = "";
            oldOperator = "+" 
            break;
        case "-":
            result = substract(first, second);
            result = result.toString();
            resultLine.textContent = result;
            firstNumber = result.toString();
            operator = "";
            oldOperator = "-"
            break;
        case "*":
            result = multiply(first, second);
            result = result.toString();
            resultLine.textContent = result;
            firstNumber = result.toString();
            operator = "";
            oldOperator = "*"
            break;
        case "/":
            result = divide(first, second);
            result = result.toString();
            resultLine.textContent = result;
            firstNumber = result.toString();
            operator = "";
            oldOperator = "/"
    }
}


const displayLine = document.querySelector(".displayLine1")
const resultLine = document.querySelector(".displayLine2")


function display(arg){
    let text = displayLine.textContent;
    if(!isNaN(arg)){
        if(firstNumber.length < 10 && operator === ""){
            displayLine.textContent += arg;
            firstNumber += arg;
        }else if(operator != "" && secondNumber.length < 10){
            displayLine.textContent += arg;
            secondNumber += arg;
        }};
      
    switch(arg){
        case "+":
            if(operator === ""){
                displayLine.textContent += " + ";
                operator = "+";}      
        case "-":
            if(operator === ""){
                displayLine.textContent += " - ";
                operator = "-";}     
        case "*":
            if(operator === ""){
                displayLine.innerHTML += ' &times; ';
                operator = "*";}    
        case "/":
            if(operator === ""){
                displayLine.innerHTML += ' &divide; '
                operator = "/";}      
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
buttonEq.addEventListener("click", function() {calculate()});


// Operations for display modification
const clear = document.querySelector(".clear")
clear.addEventListener("click", displayClear);
const del = document.querySelector(".delete")
del.addEventListener("click", displayDel);




