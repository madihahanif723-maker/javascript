//.......question:1......//
document.write("<div>")

var date = new Date();
document.write(date);


document.write("</div>")

//.......question:2......//
document.write("<br>")

document.write("<div class='two'>")

var date = new Date();
monthlist = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = date.getMonth();
document.write("Current Month: " + monthlist[month]);

document.write("</div>")

//.......question:3......//

document.write("<br>")

document.write("<div class='three'>")

var date = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay();
document.write("Today is " + dayNames[day]);

document.write("</div>")

//.......question:4......//

document.write("<br>")

document.write("<div class='four'>")

var date = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay();
if (dayNames[day] === "Sun" || dayNames[day] === "Sat") {
    document.write("It's Fun day");
}

document.write("</div>")


//.......question:5......//

document.write("<br>")

document.write("<div class='five'>")

var date = new Date();
var date = date.getDate();
if (date < 16) {
    document.write("“First fifteen days of the month");
}
else {
    document.write("Last days of the month");
}


document.write("</div>")


//.......question:6......//

document.write("<br>")

document.write("<div class='six'>")

var date = new Date();
var millisec = date.getTime();
document.write("Current Date: " + date + "<br>"+"<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>"+"<br>");
document.write("Elapsed minutes since January 1, 1970: " + (millisec / (1000 * 60)) + "<br>");



document.write("</div>")


//.......question:7......//

document.write("<br>")

document.write("<div class='seven'>")

var date = new Date();
var hour = date.getHours();
if (hour < 12) {
    document.write("Its AM");
}
else {
    document.write("Its PM");
}


document.write("</div>")

//.......question:8......//

document.write("<br>")

document.write("<div class='eight'>")

var date = new Date();
var laterDate = new Date("Dec 31, 2020");
document.write(laterDate);

document.write("</div>")


