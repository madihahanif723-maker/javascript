//........question:1...........//

var arr = [];

//........question:2...........//

var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]];

for (var i=0; i<3; i++) {
    for (var j=0; j<4; j++) {
        document.write(arr[i][j] +" ");
    }
    document.write("<br>");
}
document.write(arr);

//........question:3...........//

for(var i=1; i<=10; i++){
     document.write(i + "<br>");
 }

//........question:4...........//

var table = +prompt("Enter a number to show its multiplication table");
 var tableLength = +prompt("Enter length multiplication table");

 document.write("Multiplication table of " + table + "<br>");
 document.write("Length " + tableLength + "<br>");


for (var i=1; i<=tableLength; i++){
    document.write(table + " x" + i + " = " + table*i + "<br>")
}

//........question:5...........//
