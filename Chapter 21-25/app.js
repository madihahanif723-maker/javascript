
//.......question:1......//
document.write("<div class='one'>")

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "!");

document.write("</div>")

//.......question:2......//
document.write("<br>")

document.write("<div class='two'>")
var favoritePhone = prompt("What is your favorite mobile phone model?");
var stringLength = favoritePhone.length; 
document.write("Length of string: " + stringLength);

document.write("</div>")

//.......question:3......//

document.write("<br>")

document.write("<div class='three'>")

let word = "Pakistani";
let index = word.indexOf('n');
document.write("Index of 'n': " + index);


document.write("</div>")

//.......question:4......//

document.write("<br>")

document.write("<div class='four'>")

var str = "Hello World";
var lastIndex = str.lastIndexOf("l");
 document.write("Last index of 'l': " + lastIndex);

document.write("</div>")


//.......question:5......//

document.write("<br>")

document.write("<div class='five'>")

var city = "Pakistani";
var character = city.charAt(3);
document.write("Character at index 3: " + character);

document.write("</div>")


//.......question:6......//

document.write("<br>")

document.write("<div class='six'>")

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "!");

document.write("</div>")


//.......question:7......//

document.write("<br>")

document.write("<div class='seven'>")

var originalCity = "Hyderabad";
document.write("City : " + originalCity + "<br>")
var newCity = originalCity.replace("Hyder", "Islam");
document.write("After Replacement : " + newCity)

document.write("</div>")

//.......question:8......//

document.write("<br>")

document.write("<div class='eight'>")

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write(newMessage)

document.write("</div>")

//.......question:9......//

document.write("<br>")

document.write("<div class='nine'>")

var str = "472";
var num = Number(str);
document.write(num)


document.write("</div>")

//.......question:10......//

document.write("<br>")

document.write("<div class='ten'>")

var str = prompt("Enter Input: ");
document.write("User input: " + str + "<br>");
document.write("Upper case: " + str.toUpperCase())

document.write("</div>")

