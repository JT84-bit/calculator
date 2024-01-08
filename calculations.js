
multiply = (first, second) => first * second;
add = (first, second) => first + second;
substract = (first, second) => first + second;
divide = (first, second) => first / second;


const displayLine = document.querySelector(".display")

const button1 = document.querySelector(".button1")
button1.addEventListener("click", () => displayLine.textContent += "1");
const button2 = document.querySelector(".button2")
button2.addEventListener("click", () => displayLine.textContent += "2");
const button3 = document.querySelector(".button3")
button3.addEventListener("click", () => displayLine.textContent += "3");
const button4 = document.querySelector(".button4")
button4.addEventListener("click", () => displayLine.textContent += "4");
const button5 = document.querySelector(".button5")
button5.addEventListener("click", () => displayLine.textContent += "5");
const button6 = document.querySelector(".button6")
button6.addEventListener("click", () => displayLine.textContent += "6");
const button7 = document.querySelector(".button7")
button7.addEventListener("click", () => displayLine.textContent += "7");
const button8 = document.querySelector(".button8")
button8.addEventListener("click", () => displayLine.textContent += "8");
const button9 = document.querySelector(".button9")
button9.addEventListener("click", () => displayLine.textContent += "9");
const button0 = document.querySelector(".button0")
button0.addEventListener("click", () => displayLine.textContent += "0");
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => displayLine.textContent = "");

const del = document.querySelector(".delete")
del.addEventListener("click", () => displayLine.textContent = "");

const buttonAdd = document.querySelector(".button-add")
buttonAdd.addEventListener("click", () => displayLine.textContent += " + ");


