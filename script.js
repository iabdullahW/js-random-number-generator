// random num generator
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("Label1");
const myLabel2 = document.getElementById("Label2");
const myLabel3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;

}