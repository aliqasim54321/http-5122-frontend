window.onload = pageready;

function pageready() {
  // Get form values
  var formHandle = document.forms.ixdForm;

  function validateForm(e) {
    e.preventDefault();

    // Validate First Name
    var firstName = document.getElementById("in_fName");
    if (firstName.value === "") {
      firstName.style.background = "red";
      firstName.focus();
      return false;
    } else {
      firstName.style.background = "White";
    }
    // Validate Last Name
    var lastName = document.getElementById("in_lName");
    if (lastName.value === "") {
      lastName.style.background = "red";
      lastName.focus();
      return false;
    } else {
      lastName.style.background = "White";
    }

    // Validate Humber ID with regex
    var id = document.getElementById("in_id");
    var idRegex = /^[N|n]\d{8}$/;
    if (!idRegex.test(id.value)) {
      id.style.background = "red";
      id.focus();
      return false;
    } else {
      id.style.background = "White";
    }

    // Validate Program
    var program = document.getElementById("in_program");
    if (program.value === "X") {
      program.style.background = "red";
      program.focus();
      return false;
    } else {
      program.style.background = "White";
    }

    // Validate Project Selection
    var projectSelection = document.getElementsByName("f__project");
    var projectPara = document.getElementById("caption_project");
    var projectSelectionValue = null;
    for (let i = 0; i < projectSelection.length; i++) {
      if (projectSelection[i].checked === false) {
        projectPara.style.background = "red";
      } else {
        projectPara.style.background = "White";
        projectSelectionValue = projectSelection[i].value;
      }
    }

    if(projectSelectionValue == null) {
        return false;
    }

    // Hide header and form
    document.getElementById("welcome").style.display = "none";
    document.getElementById("form").style.display = "none";

    // Show confirmation message
    document.getElementById("result").style.display = "block";

    document.getElementById("result__Fname").textContent = firstName.value;
    document.getElementById("result__Lname").textContent = lastName.value;
    document.getElementById("result__id").textContent = id.value;
    document.getElementById("result__program").textContent = program.value;
    document.getElementById("result__project").textContent = projectSelectionValue;
  }

  formHandle.onsubmit = validateForm;
}
