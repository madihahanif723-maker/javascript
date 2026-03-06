//...question 1.....//
// i
var main = document.getElementById("main-content");
// ii
console.log = (main.childNodes);
// iii
var render = document.getElementsByClassName("render");
for (var i = 0; i < render.length; i++) {
    document.write(render[i].innerHTML + "<br>");
    
}
// iv
document.getElementById("first-name").value = "ALex";
document.getElementById("last-name").value = "Smith";
document.getElementById("email").value = "alexbank@wexample.com";


//...question 2.....//
// i
var a = document.getElementById("form-content");
// console.log(a.nodeType);

// ii
var b = document.getElementById("last-name");
// console.log(b.nodeType);

// iii
var c = document.getElementById("last-name");
// console.log(c.childNodes[0].nodeType);

// iv
var d = document.getElementById("main-content");
// console.log(d.firstChild);
document.write(d.firstChild)
document.write(d.lastChild)



// vi
// var f = document.getElementById("last-name");
// // console.log(f.nextSibling);
// document.write(f.nextSibling)
// document.write(f.previousSibling)

// viii
var h = document.getElementById("email");
// console.log(h.parentNode);
document.write(h.parentNode)
// console.log(h.nodeType);
// document.write(h.nodeType)




