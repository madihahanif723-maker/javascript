//         Chapter 49-52

//         Task 1

var fn = document.getElementById("fn");
var fatherName = document.getElementById("father'n");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var resetBtn = document.getElementById("resetBtn");
var submitBtn = document.getElementById("submitBtn");

function output() {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h2>Submitted Data:</h2>
    <p><strong>Full Name:</strong> ${fn.value}</p>
    <p><strong>Father's Name:</strong> ${fatherName.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Phone:</strong> ${phone.value}</p>
  `;
}

function resetForm() {
  fn.value = "";
  fatherName.value = "";
  email.value = "";
  phone.value = "";
}
function submitForm() {
  output();
  resetForm();
}


function expandText() {
  var shortText = "i first climbed Tryfan in 1993 the day I was made redundant from a job in Chester. I drove over on a summer’s evening without a map, compass or really a clue as to how to climb it but I did."
  var text = 'I first climbed Tryfan in 1993 the day I was made redundant from a job in Chester. I drove over on a summer’s evening without a map, compass or really a clue as to how to climb it but I did. It is a wonderful scramble, a proper hands on experience but not for the beginner. On that fatefulday I even made the famous summit leap from Adam to Eve (never repeated on subsequent visits) before heading up Bristly Ridge on to the Glyders. Many knowledgeable walkers have argued that Tryfan is the best Britain can offer and it is difficult to argue.'

  if (link.innerHTML == "See more") {
    paraText.innerHTML = text
    link.innerHTML = "See less"
  } else if (link.innerHTML == "See less") {
    paraText.innerHTML = shortText

    link.innerHTML = "See more"
  }
}


function deleteRow(e) {
  e.parentElement.parentElement.style.display = "none"

}
var sName = document.getElementById("sname");
var sAge = document.getElementById("age");
var sClass = document.getElementById("usernameClass");
var tBody = document.getElementById("tBody");
var userD = document.getElementById("username");
var rollNum = document.getElementById("num");
var index = 0;
var editInput = "";

function addStuden() {
  if (editInput === "") {
    index++;
    tBody.innerHTML += `<tr>
 <td>${index}</td>
        <td>${sName.value}</td>
        <td>${sClass.value}</td>
        <td>${sAge.value}</td>
        <td>${rollNum.value}</td>
        <td>
          <button class="editbtn" onclick="editRow(this)">Edit</button>
          <button class="delbtn" onclick="deleteRow(this)">Delete</button>
        </td>
      </tr>
     `
  }
  else {
    editInput.children[1].innerText = sName.value;
    editInput.children[2].innerText = sClass.value;
    editInput.children[3].innerText = sAge.value;
    editInput.children[4].innerText = rollNum.value;
  }
  editInput = "";
  sName.value = "";
  sClass.value = "";
  sAge.value = "";
  rollNum.value = "";
}





function editRow(e) {
  var myTr = e.parentElement.parentElement;
  var uN = myTr.children[1].innerText;
  var uC = myTr.children[2].innerText;
  var uA = myTr.children[3].innerText;
  var uR = myTr.children[4].innerText;
  sName.value = uN;
  sClass.value = uC;
  sAge.value = uA;
  rollNum.value = uR;

  editInput = myTr;


}


