document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms["ixdForm"];
    const resultSection = document.getElementById("result");
    const fNameInput = form.elements["f__fName"];
    const lNameInput = form.elements["f__lName"];
    const idInput = form.elements["f__id"];
    const programSelect = form.elements["f__program"];
    const projectRadios = form.elements["f__project"];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Validation
        let isValid = true;
        if (fNameInput.value.trim() === "") {
            isValid = false;
            fNameInput.style.borderColor = "red";
            fNameInput.focus();
        } else {
            fNameInput.style.borderColor = "";
        }

        if (lNameInput.value.trim() === "") {
            isValid = false;
            lNameInput.style.borderColor = "red";
            if (isValid) lNameInput.focus();
        } else {
            lNameInput.style.borderColor = "";
        }

        if (idInput.value.trim() === "" || !/^n\d{8}$/i.test(idInput.value.trim())) {
            isValid = false;
            idInput.style.borderColor = "red";
            if (isValid) idInput.focus();
        } else {
            idInput.style.borderColor = "";
        }

        if (programSelect.value === "X") {
            isValid = false;
            programSelect.style.borderColor = "red";
            if (isValid) programSelect.focus();
        } else {
            programSelect.style.borderColor = "";
        }

        let selectedProject = false;
        projectRadios.forEach(function(radio) {
            if (radio.checked) {
                selectedProject = true;
            }
        });

        if (!selectedProject) {
            isValid = false;
            document.getElementById("caption_project").style.backgroundColor = "red";
        } else {
            document.getElementById("caption_project").style.backgroundColor = "";
        }

        if (isValid) {
            // Hide form and show result section
            form.style.display = "none";
            resultSection.style.display = "block";

            // Output message
            document.getElementById("result__Fname").textContent = fNameInput.value.trim();
            document.getElementById("result__Lname").textContent = lNameInput.value.trim();
            document.getElementById("result__id").textContent = idInput.value.trim();
            document.getElementById("result__program").textContent = programSelect.options[programSelect.selectedIndex].text;
            projectRadios.forEach(function(radio) {
                if (radio.checked) {
                    document.getElementById("result__project").textContent = radio.value;
                }
            });
        }
    });
});
