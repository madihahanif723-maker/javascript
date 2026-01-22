//.......question:1......//
document.write("<div class='one'>")

var num = +prompt("Enter a positive integer: ");

if (num > 0) {
    document.write("Number: " + num + "<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
}

document.write("</div>")

//.......question:2......//
document.write("<br>")

document.write("<div class='two'>")

var num1 = +prompt("Enter a negative integer: ");
if (num1 < 0) {
    document.write("Number: " + num1 + "<br>");
    document.write("Round off value: " + Math.round(num1) + "<br>");
    document.write("Floor value: " + Math.floor(num1) + "<br>");
    document.write("Ceil value: " + Math.ceil(num1) + "<br>");
}

document.write("</div>")

//.......question:3......//

document.write("<br>")

document.write("<div class='three'>")

var num = +prompt("Enter number: ");
document.write("The absolute value of " + num + " is " + Math.abs(num));


document.write("</div>")

//.......question:4......//

document.write("<br>")

document.write("<div class='four'>")

var randomNum = Math.random() * 6;
document.write("Random dice value: " + Math.floor(randomNum));

document.write("</div>")


//.......question:5......//

document.write("<br>")

document.write("<div class='five'>")

var coin = Math.random() * 2;
coin = Math.floor(coin);
if (coin > 0) {
    document.write("Random coin value: Heads");
}
else {
    document.write("Random coin value: Tails");
}

document.write("</div>")


//.......question:6......//

document.write("<br>")

document.write("<div class='six'>")

var randomNum = Math.random() * 100;
document.write("Random number between 1-100: " + Math.floor(randomNum));

document.write("</div>")


//.......question:7......//

document.write("<br>")

document.write("<div class='seven'>")

 var weight = prompt("Enter your weight in kilograms: ");
document.write("The weight of user is " + weight + " kilograms");

document.write("</div>")

//.......question:8......//

document.write("<br>")

document.write("<div class='eight'>")

var secretNum = +prompt("Enter a number between 1 and 10");
randomNum = Math.random() * 10;
randomNum = Math.ceil(randomNum);
if(secretNum === randomNum){
    document.write("Congratulations");
}
else{
    document.write("Try Again");
}
document.write("</div>")
