//.......question:1......//
document.write("<div>")

function Time() {
    var date = new Date();
    document.write(date);
}
Time();

document.write("</div>")

//.......question:2......//
document.write("<br>")

document.write("<div>")

function greetUser() {
    var firstName = prompt("Enter your first name: ");
    var lastName = prompt("Enter your last name: ");
    document.write("Welcome to  " + firstName + " " + lastName);
}
greetUser();

document.write("</div>")

//.......question:3......//

document.write("<br>")

document.write("<div>")

function sum() {
    var firstNumber = +prompt("Enter first number: ");
    var secondNumber = +prompt("Enter second number: ");
    document.write(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}
sum();

document.write("</div>")

//.......question:4......//

document.write("<br>")

document.write("<div>")

function calculation(num1, num2, operator) {
    var operation;
    if (operator == "+") {
        operation = num1 + num2;
    } else if (operator == "-") {
        operation = num1 - num2;
    } else if (operator == "*") {
        operation = num1 * num2;
    } else if (operator == "/") {
        operation = num1 / num2;
    } else {
        operation = "Invalid Operator";
    }
    return operation;
    console.log("Hello");
}
var userNum1 = Number(prompt("Enter a number"));
var userNum2 = Number(prompt("Enter another number"));
var userOperator = prompt("Enter an operator(+, -, *, /)");

document.write(calculation(userNum1, userNum2, userOperator));



document.write("</div>")


//.......question:5......//

document.write("<br>")

document.write("<div>")

function square(number) {
    return number * number;
}
document.write("Square of number is: " + square(5));



document.write("</div>")


//.......question:6......//

document.write("<br>")

document.write("<div>")

function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));


document.write("</div>")


//.......question:7......//

document.write("<br>")

document.write("<div>")

function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
}
var start = +prompt("Enter start number for counting:");
var end = +prompt("Enter end number for counting:");
counting(start, end);



document.write("</div>")

//.......question:8......//

document.write("<br>")

document.write("<div>")

function calculationHypotenuse(base, Perpendicular) {
    var base, Perpendicular;
    function CalculateSquare(num) {
        num = num ** 2;
        return num;
    }
    base = CalculateSquare(base);
    Perpendicular = CalculateSquare(Perpendicular);
    var hypotenuse = base + Perpendicular;
    return hypotenuse;
}
var base = Number(prompt("Enter base of triangle:"));
var perpendicular = Number(prompt("Enter perpendicular of triangle:"));
var hypotenuse = calculationHypotenuse(base, perpendicular);
document.write("The hypotenuse of the triangle is: " + hypotenuse);

document.write("</div>")

//.......question:9......//

document.write("<br>")

document.write("<div>")

function areaOfRectangle(width, height) {
    var area = width * height;
    return area;
}
var width = Number(prompt("Enter width of rectangle:"));
var height = Number(prompt("Enter height of rectangle:"));
var area = areaOfRectangle(width, height);
document.write("The area of the rectangle is: " + area);

document.write("</div>")

//.......question:10......//
document.write("<br>")

document.write("<div>")

function palindrome(str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
var userInput = prompt("Enter a string to check if it's a palindrome:");
if (palindrome(userInput)) {
    alert("The string is a palindrome.");
} else {
    alert("The string is not a palindrome.");
}
document.write("The string is: " + userInput);

document.write("</div>")

//.......question:11......//

document.write("<br>")

document.write("<div>")

function titleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}
var userString = prompt("Enter a string to convert to title case:");
var titleCasedString = titleCase(userString);
document.write("Title Case: " + titleCasedString);

document.write("</div>")

//.......question:12......//

document.write("<br>")

document.write("<div>")

function longestWord(str) {
    var words = str.split(' ');
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
var userString = prompt("Enter a string to find the longest word:");
var longest = longestWord(userString);
document.write("The longest word is: " + longest);

document.write("</div>")