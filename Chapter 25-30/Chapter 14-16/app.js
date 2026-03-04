//.............question:1..............//

var students = [];

//.............question:2...............//

var students = new Array();

//............question:3..............//

var cities = ["Karachi", "Lahore", "Faisalabad", "Hyderabad"];
document.write("String Array : " + cities + "<br/>" + "<br/>");

//............question:4..............//

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
document.write("Number Array : " + num + "<br/>" + "<br/>")

//............question:5..............//

var Boo = [true, false, true, false];
document.write("Boolean Array: " + Boo + "<br/>" + "<br/>");

//............question:6..............//

var array = ["Madiha", "Hanif", 7, true, false];
document.write("Mixed Array: " + array + "<br/>" + "<br/>");

//............question:7..............//


var qualif = ["SSC" + "<br/>" + "HSC" + "<br/>" + "BCS" + "<br/>" + "BS" + "<br/>" + "BCOM" + "<br/>" + "MS" + "<br/>" + "M.Phil" + "<br/>" + "PHD" + "<br/>"];
document.write(qualif + "<br/>")

//............question:9..............//

var colos = ["red", "yellow", "brown"];
document.write(colos + "<br>");

var colour = prompt("Enter color to add beginning");
colos.unshift(colour);
console.log(colos + "<br>");

var endcolor = prompt("Enter color to add Ending");
colos.push(endcolor + "<br>");
console.log(colos + "<br>");

var startcolor = prompt("Enter color to add beginning");
colos.unshift(startcolor);
console.log(colos + "<br>");

colos.shift();
console.log(colos + "<br>");

colos.pop();
console.log(colos + "<br>");

var index = +prompt("which index you like to add color");
var newcolor = prompt("which color you like to add that index");
colos.splice(index, 0, newcolor);
document.write(colos + "<br>");

let indexToDelete = prompt("Enter the index to start deleting colors from:");
let countToDelete = prompt("Enter the number of colors to delete:");
colors.splice(indexToDelete, countToDelete);
document.write(colos + "<br>");

//............question:10..............//

var scores = [320, 230, 480, 120];
document.write("Scores of Students :" + scores + "<br>");

scores.sort(function (a, b) {
    return a - b;});

document.write("Ordered Scores of Students :" + scores);

//............question:11..............//

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(cities + "<br>");
document.write(cities.slice(2, 4));

//............question:12..............//

var arr = ["This ", " is ", " my ", " cat"];
// arry
document.write(arr + "<br>");
//string
var result = arr.join("");
document.write(result);