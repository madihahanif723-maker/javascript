//........question:1...........//

var arr = [];

//........question:2...........//

var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]];

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        document.write(arr[i][j] + " ");
    }
    document.write("<br>");
}
document.write(arr);

//........question:3...........//

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//........question:4...........//

var table = +prompt("Enter a number to show its multiplication table");
var Length = +prompt("Enter length multiplication table");

document.write("Multiplication table of " + table + "<br>");
document.write("Length " + Length + "<br>");


for (var i = 1; i <= Length; i++) {
    document.write(table + " x" + i + " = " + table * i + "<br>")
}

//........question:5...........//

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

//........question:5...........//
document.write("<br>Counting:<br><br>")
//a

for (var i = 1; i <= 15; i++) {
    document.write(i + ",")
}

document.write("<br><br>Reverse counting:<br><br>")
//b

for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}
document.write("<br><br>Even:<br><br>")
//c

for (var i = 0; i <= 20; i += 2) {
    document.write(i + " ,");
}

document.write("<br><br>odd:<br><br>")
//d

for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

document.write("<br><br>kSeries:<br><br>")
//e

for (var i = 2; i <= 20; i += 2) {
    document.write(i + "K, ");
}
document.write("<br><br>")
//.........question:7........//

var menu = ["cake", "apple pie", "cookie", "chips"]
var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
for (var i = 0; i < menu.length; i++) {
    if (order.toLowerCase() === menu[i]) {
        document.write(menu[i] + " is available at index " + menu.length + " in our bakery.")
    }
}

//.........question:10......//

for (var i = 5; i<=100; i+=5){
    document.write(i +" ,")
}