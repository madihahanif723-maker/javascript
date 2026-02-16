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

document.write("<div>")
function calculatePercentage(marksObtained, totalMarks){
    return (marksObtained / totalMarks) * 100
}
var marksObtained = prompt("Enter the marks obtained")
var totalMarks = prompt("Enter the total marks")
var percentage = calculatePercentage(marksObtained, totalMarks)
document.write("The percentage is: " + percentage + "%")
document.write("</div>")

document.write("<br>")

//...question 6......//
document.write("<div>")
function calculateIndexOfSubString(mainString, subString){
    return mainString.indexOf(subString)
}
var mainString = prompt("Enter the main string")
var subString = prompt("Enter the substring to find")
var index = calculateIndexOfSubString(mainString, subString)
if(index !== -1){
    document.write("The index of the substring is: " + index)
}
else{
    document.write("Substring not found in the main string")
}
document.write("</div>")

document.write("<br>")

//...question 7......//
document.write("<div>")
function removeVowels(str){
    return str.replace(/[aeiouAEIOU]/g, '')
}
var inputString = prompt("Enter a string")
var resultString = removeVowels(inputString)
document.write("String after removing vowels: " + resultString)
document.write("</div>")

document.write("<br>")

//...question 8......//

document.write("<div>")
function convertToMeters(distanceInFeet){
    return distanceInFeet * 0.3048
}
var distanceInFeet = prompt("Enter the distance in feet")
var distanceInMeters = convertToMeters(distanceInFeet)
document.write("The distance in meters is: " + distanceInMeters + " m")
document.write("</div>")

document.write("<br>")

//...question 9......//
document.write("<div>")
function calculateOvertimePay(hoursWorked){
    var overtimeHours = hoursWorked - 40
    if(overtimeHours > 0){
        return overtimeHours * 12
    }
    else{        return 0
    }
}
var hoursWorked = prompt("Enter the number of hours worked")
var overtimePay = calculateOvertimePay(hoursWorked)
document.write("The overtime pay is: " + overtimePay)
document.write("</div>")

document.write("<br>")

//...question 10......//
document.write("<div>")
function currencyDenomination(amount){
    var denominations = [1000, 500, 100]
    var result = {}
    for(var i = 0; i < denominations.length; i++){
        var count = Math.floor(amount / denominations[i])
        if(count > 0){
            result[denominations[i]] = count
            amount -= count * denominations[i]
        }
    }
    return result
}
var amount = prompt("Enter the amount")
var denominationResult = currencyDenomination(amount)
document.write("Currency Denominations:<br>")
for(var key in denominationResult){
    document.write(key + ": " + denominationResult[key] + "<br>")
}
document.write("</div>")

document.write("<br>")