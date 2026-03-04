//.......question:1........//

var character = prompt("enter  number, uppercase letter or lower case letter");
var num = character;
if (num >= 48 && num <= 57) {
    console.log(character + " is number");
}

else if (num >= 65 && num <= 90) {
    console.log(character + " is Uppercase Letter");
}
else if (num >= 97 && num <= 122) {
    console.log(character + " is Lowercase Letter");
}

else {
    console.log("Given input");
}

//.......question:2..........//

var firstNum = +prompt("Enter first number: ");
var secondNum = +prompt("Enter second number: ");

if (firstNum > secondNum) {
    console.log(firstNum + " is Greater than " + secondNum);
}
else if (firstNum < secondNum) {
    console.log(secondNum + " is Greater than " + firstNum);
}
else {
    console.log(firstNum + " and " + secondNum + " both are equal");
}

//.........question:3........//

var numposiv = +prompt("Enter a number to check its state: ");

if (numposiv > 0) {
    console.log(numposiv + " is Positive");
}
else if (numposiv < 0) {
    console.log(numposiv + " is Negative");
}

else {
    console.log("Number is " + numposiv);
}

//.........question:4.........//

var character = prompt("Enter character to check vowel or not");

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    console.log(character + " is vowel");
}
else {
    console.log(character + " is not vowel");
}

//.........question:6.........//
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
}
else {
    greeting = "Good evening";
    console.log(greeting);
}

//...........question:7..........//
 
var time = +prompt("enter 24 hours clock format time like: 1900 = 7pm.");

if (time >= 0 && time < 1200){
    console.log("Good Morning");
}

else if (time >= 1200 && time < 1700){
    console.log("Good Afternoon");
}

else if (time >= 1700 && time < 2100){
    console.log("Good Evening");
}

else if (time >= 2100 && time <= 2359){
    console.log("Good Night");
}

else{
    console.log("Invalid time");
}
