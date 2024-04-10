let Form1 = document.getElementById("form1");
let Form2 = document.getElementById("form2");
let Form1Btn = document.getElementById("form1btn");
let Form2Btn = document.getElementById("form2btn");

function getForm1() {
    Form1Btn.textContent = "Hide Form";
    Form1Btn.setAttribute("onclick", "Exit()");
    Form1.className = "form";
}

function getForm2() {
    Form2Btn.textContent = "Hide Form";
    Form2Btn.setAttribute("onclick", "Exit()");
    Form2.className = "form";
}

function Exit() {
    Form1Btn.textContent = "View Form";
    Form1Btn.setAttribute("onclick", "getForm1()");
    Form2Btn.textContent = "View Form";
    Form2Btn.setAttribute("onclick", "getForm2()");
    Form1.className = "form1";
    Form2.className = "form1";
}