// i
var x = document.getElementById("main-content");


// ii
var y = x.children;

for(var i=0; i<y.length; i++){
document.write(y[i].innerHTML);
document.write("<br>");
}


// iii
var z = document.getElementsByClassName("render");

for(var i=0; i<z.length; i++){
document.write(z[i].innerHTML);
document.write("<br>");
}


// iv
document.getElementById("first-name").value = "Alex";


// v
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";