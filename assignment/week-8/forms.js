window.onload = pageready;

function pageready() {

    // Validate form fields
    var isValid = validateForm();

    if (isValid) {
        // Hide header and form
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('form').style.display = 'none';

        // Show confirmation message
        document.getElementById('result').style.display = 'block';

        // Get form values
        var firstName = document.getElementById('in_fName').value;
        var lastName = document.getElementById('in_lName').value;
        var id = document.getElementById('in_id').value;
        var program = document.getElementById('in_program').options[document.getElementById('in_program').selectedIndex].text;
        var project = document.querySelector('input[name="f__project"]:checked').value;

        // Update confirmation message with form values
        document.getElementById('result__Fname').innerText = firstName;
        document.getElementById('result__Lname').innerText = lastName;
        document.getElementById('result__id').innerText = id;
        document.getElementById('result__program').innerText = program;
        document.getElementById('result__project').innerText = project;
    }


function validateForm() {
    var isValid = true;

    // Validate First Name
    var firstName = document.getElementById('in_fName');
    if (firstName.value === '') {
        firstName.style.background = "red";
        firstName.style.color = "White";
        firstName.focus();
        firstName.innerHTML ="Please enter your First Name."; 
        return false
         } else {
        firstName.style.direction = "none";
    }

    // Validate Last Name
    var lastName = document.getElementById('in_lName');
    if (firstName.value === '') {
        firstName.style.background = "red";
        firstName.style.color = "White";
        firstName.focus();
        firstName.innerHTML ="Please enter your Last Name."; 
        return false
         } else {
        firstName.style.direction = "none";
    }

    // Validate Humber ID with regex
    var id = document.getElementById('in_id');
    var idRegex = /^[N|n]\d{8}$/;
    if (!idRegex.test(id.value)) {
            id.style.background = "red";
            id.style.color = "White";
            id.focus();
            id.innerHTML ="Please enter your valid Humber id"; 
            return false
             } else {
            id.style.direction = "none";
        }

    // Validate Program
    var program = document.getElementById('in_program');
    if (program.value === '') {
        program.style.background = "red";
        program.style.color = "White";
        program.focus();
        program.innerHTML ="Please select anyone program"; 
        return false
         } else {
        program.style.direction = "none";
    }

    // Validate Project Selection
    var projectSelection = document.querySelectorAll('input[name="f__project"]:checked');
    if (projectSelection.length === 0) {
        document.getElementById('caption_project').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('caption_project').classList.remove('error');
    }

    return isValid;
}
}