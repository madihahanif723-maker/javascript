//.......question:1......//
document.write("<div>")

function Time(){
    var date  = new Date();
    document.write(date); 
}
Time();

document.write("</div>")

//.......question:2......//
document.write("<br>")

document.write("<div>")

function greetUser(){
var firstName = prompt("Enter your first name: ");
    var lastName = prompt("Enter your last name: ");
    document.write("Welcome to  " + firstName + " " + lastName);
}
greetUser();

document.write("</div>")

//.......question:3......//

document.write("<br>")

document.write("<div>")

function sum(){
    var firstNumber = +prompt("Enter first number: ");
    var secondNumber = +prompt("Enter second number: ");
    document.write(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}
sum();

document.write("</div>")

//.......question:4......//

document.write("<br>")

document.write("<div>")

function calculator(num1, num2, operator){
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
}
var number1 = +prompt("Enter first number: ");
var number2 = +prompt("Enter second number: ");
var op = prompt("Enter operator (+, -, *, /): ");
var result = calculator(number1, number2, op);
document.write("Result: " + result);

document.write("</div>")


//.......question:5......//

document.write("<br>")

document.write("<div>")

function square(number){
    return number * number;
}
document.write("Square of number is: " + square(5));



document.write("</div>")


//.......question:6......//

document.write("<br>")

document.write("<div>")
function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
document.write("Factorial of 5 is: " + factorial(5));


document.write("</div>")


//.......question:7......//

document.write("<br>")

document.write("<div>")

function counting(start, end){
    for (var i = start; i <= end; i++){
        document.write(i + " ");
    }
}
var start = +prompt("Enter start number for counting:");
var end = +prompt("Enter end number for counting:");
counting(start,end);



document.write("</div>")