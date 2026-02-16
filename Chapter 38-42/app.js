//...question 1......//
document.write("<div></div>")
 function power(a,b){
    return a*b
 }
var result = prompt("Enter the value of a and b")
var res = result.split(" ")
var a = parseInt(res[0])
var b = parseInt(res[1])
var ans = power(a,b)
document.write(ans)

document.write("</div>")

document.write("<br>")

//...question 2......//
document.write("<div>")

function leapyear(year){
    if(year % 4 === 0){
        return "It is a leap year"
    }
    else{
        return "It is not a leap year"
    }
}
var year = prompt("Enter a year")
var result = leapyear(year)
document.write(result)
document.write("</div>")

document.write("<br>")

//...question 3......//
document.write("<div>")

function areaOfTriangle(base, height){
    return (base * height) / 2
}
var base = prompt("Enter the base of the triangle")
var height = prompt("Enter the height of the triangle")
var area = areaOfTriangle(base, height)
document.write("The area of the triangle is: " + area)
document.write("</div>")

document.write("<br>")

//...question 4......//
document.write("<div>")
function calculateAverage(num1, num2, num3){
    return (num1 + num2 + num3) / 3
}
var num1 = prompt("Enter the first number")
var num2 = prompt("Enter the second number")
var num3 = prompt("Enter the third number")
var average = calculateAverage(num1, num2, num3)
document.write("The average of the three numbers is: " + average)
document.write("</div>")

document.write("<br>")

//...question 5......//






