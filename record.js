// // fill in javascript code here



document.addEventListener("DOMContentLoaded", function () {
var form = document.getElementById("employeeForm");
var tableBody = document.querySelector("table tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var employeeID = document.getElementById("employeeID").value;
    var department = document.getElementById("department").value;
    var experience = parseFloat(document.getElementById("exp").value);
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mbl").value;
    var role = getEmployeeRole(experience);

    if (name && employeeID && department && experience && email && mobile) 
    {
    appendEmployeeToTable(name, employeeID, department, experience, email, mobile, role);
    form.reset();
    } 
    else 
    {
    alert("Please fill in all fields.");
    }
});

function getEmployeeRole(experience) {
    if (experience > 5) {
    return "Senior";
    } else if (experience >= 2 && experience <= 5) {
    return "Junior";
    } else {
    return "Fresher";
    }
}

function appendEmployeeToTable(name, employeeID, department, experience, email, mobile, role) {
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${name}</td>
    <td>${employeeID}</td>
    <td>${department}</td>
    <td>${experience}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button onclick="deleteEmployee(this)">Delete</button></td>
    `;

    tableBody.appendChild(newRow);
}
});

function deleteEmployee(button) 
{
  var row = button.parentElement.parentElement;
  row.remove();
}


