document.write("<div class='tab'>");

var subject1 = prompt("Enter first subject name");
var subject2 = prompt("Enter second subject name");
var subject3 = prompt("Enter third subject name");

var marks1 = prompt("Enter obtained marks of " + subject1);
var marks2 = prompt("Enter obtained marks of " + subject2);
var marks3 = prompt("Enter obtained marks of " + subject3);

var obtainedMarks = Number(marks1) + Number(marks2) + Number(marks3);
var percentage = (obtainedMarks / 300) * 100;

document.write("<b>Table of Marks Sheet</b><br><br>");

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>300</th><th>" + obtainedMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage + "%</th></tr>");
document.write("</table>");

document.write("</div>");