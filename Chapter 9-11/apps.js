//.....question:1...//


var city = prompt('enter your city name');
if (city === "Karachi") {
    alert("Welcome to city of lights");
}

//.....question:2......//

var gender = prompt("enter your Gender");
if (gender === "male") {
    alert("Good Morning Sir")
}

if (gender === "female") {
    alert("Good Morning  Ma'am")
}
//......question:3....//

var color = prompt("enter color of traffic signal");
if (color === "red") {
    alert("Must stop")
}
if (color === "yellow") {
    alert("Ready to move")
}
if (color === "green") {
    alert("Move now")
}

//......question:4......//

var fuel = +prompt("Enter amount of fuel remaining in your car")
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}

//.........question:5......//

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//....b....//
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//.......c.....//
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

//.......d.......//

var materialcost = 20000;
var laborCost = 2000;
var totalCost = materialcost + laborCost;
if (totalCost === laborCost + materialcost) {
    alert("The cost equals");
}

//........e.......//

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
//.........f.........//
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//.......question:6.......//
document.write("<div class='tab'>");

var total = +prompt("enter your Total marks of three subjects")
var marksobtained = +prompt("enter your obtained marks in three subjects")
var percentage = (marksobtained / total) * 100
percentage = percentage;

document.write("<h2>" + "MarkSheet" + "</h2>" + "<br>");
document.write("Total Marks : " + total + "<br>");
document.write("Obtained Marks : " + marksobtained + "<br>");
document.write("Percentage : " + percentage + "%" + "<br>");

var grade;
var remarks;
if (percentage >= 90) {
    grade = "A-one"
    remarks = "Excellent"
}
if (percentage >= 70) {
    grade = "A"
    remarks = "Good"
}
if (percentage >= 60) {
    grade = "B"
    remarks = "You need to improve"
}
else {
    grade = "Fail"
    remarks = "Sorry"
}
document.write("Grade : " + grade + "<br>")
document.write("Remarks : " + remarks + "<br>")

document.write("</div>");

//...........question:7.........//

var secretNumber = 7;
var num11 = +prompt("Enter your Number")
if (num11 === secretNumber) {
    alert("Bingo! Correct answer")
}
if (num11 === ++secretNumber) {
    alert("Close enough to the correct answer")
}
//.........8.........//

var userNum = +prompt("Enter your Number");
if (userNum % 3 === 0) {
    alert(userNum + " is divisible by 3!")
}
else {
    alert(userNum + " is not divisible by 3!")
}


//........question:10...........//

var Temperature = +prompt("Enter the Temperature here");
if (Temperature > 40) {
    alert("It is too hot outside.")
}
if (Temperature > 30) {
    alert("The weather today is Normal.")
}
if (Temperature > 20) {
    alert("Today's Weather is Cool.")
}
if (Temperature > 10) {
    alert("OMG! Today's Weather is so Cool.")
}

//........question:11..........//

var num1 = +prompt("Enter your 1st Number")
var num2 = +prompt("Enter your 2nd Number")
var operator = prompt("Enter your operator")
if (opera === "+") {
    alert(num1 + num2)
}
if (opera === "-") {
    alert(num1 - num2)
}
if (opera === "/") {
    alert(num1 / num2)
}
if (opera === "*") {
    alert(num1 * num2)
}
if (opera === "%") {
    alert(num1 % num2)
}
