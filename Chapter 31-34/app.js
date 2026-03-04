//.......question:1......//
document.write("<div>")

var date = new Date();
document.write(date);


document.write("</div>")

//.......question:2......//
document.write("<br>")

document.write("<div>")

var date = new Date();
monthlist = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = date.getMonth();
document.write("Current Month: " + monthlist[month]);

document.write("</div>")

//.......question:3......//

document.write("<br>")

document.write("<div>")

var date = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay();
document.write("Today is " + dayNames[day]);

document.write("</div>")

//.......question:4......//

document.write("<br>")

document.write("<div>")

var date = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay();
if (dayNames[day] === "Sun" || dayNames[day] === "Sat") {
    document.write("It's Fun day");
} 
else (dayNames[day] === "Mon" || dayNames[day] === "Tue" || dayNames[day] === "Wed" || dayNames[day] === "Thu" || dayNames[day] === "Fri"); {
    document.write("It's a working day");
}

document.write("</div>")


//.......question:5......//

document.write("<br>")

document.write("<div>")

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

document.write("<div>")

var date = new Date();
var millisec = date.getTime();
document.write("Current Date: " + date + "<br>" + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>" + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + (millisec / (1000 * 60)) + "<br>");



document.write("</div>")


//.......question:7......//

document.write("<br>")

document.write("<div>")

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

document.write("<div>")

var date = new Date();
var oldDate = new Date("Dec 31, 2020");
document.write(oldDate);

document.write("</div>")

//.......question:9......//

document.write("<br>")

document.write("<div>")

var today = new Date();
var today = today.getTime();
var lastRamadan = new Date("feb 17 , 2026");
var ramazan = lastRamadan.getTime();
var diffmilliSec = today - ramazan;
var daysPast = diffmilliSec / (1000 * 60 * 60 * 24);
daysPast = Math.floor(daysPast);
document.write(daysPast + " days have passed since 1st Ramazan, 2026");


document.write("</div>")


//.......question:10......//

document.write("<br>")

document.write("<div>")

var today = new Date();
var todayMilli = today.getTime();
var year2015 = new Date("Jan 01, 2015");
var year2015Milli = year2015.getTime();
var diffMilliSec = todayMilli - year2015Milli;
var secondsPast = diffMilliSec / (1000);
secondsPast = Math.floor(secondsPast);
document.write("On reference date: " + today + "<br>")
document.write(secondsPast + " seconds had passed since beginning of 2026");


document.write("</div>")
//.......question:11......//

document.write("<br>")

document.write("<div>")

var today = new Date();
var hour = today.getHours();
hour = hour - 1
document.write("current date: " + today + "<br>");
today.setHours(hour);
document.write("1 hour     , it was " + today)

document.write("</div>")
//.......question:12......//

document.write("<br>")

document.write("<div>")

var today = new Date();
var years = today.getFullYear();
years = years - 100;
document.write("current date: " + today + "<br>");
today.setFullYear(years);
document.write("100 years back, it was " + today);


document.write("</div>")
//.......question:13......//

document.write("<br>")

document.write("<div>")

var age = +prompt("Enter your age");
var today = new Date();
var year = today.getFullYear();
var birthYear = year - age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);


document.write("</div>")
//.......question:14......//

document.write("<br>")

document.write("<div>")

var customerName = "ABC Customer";
var today = new Date();
mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = today.getMonth();
var noUnits = 410;
var unitCost = 16;
var netAmount = noUnits * unitCost;
var lateCharges = 350;
var grossAmount = netAmount + lateCharges;
document.write("K-Electric Bill" + "<br>" + "<br>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + mlist[currentMonth] + "<br>");
document.write("No of units: " + noUnits + "<br>");
document.write("Charges per unit: " + unitCost + "<br>" + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + lateCharges + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");

document.write("</div>")




