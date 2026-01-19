function validate() {
    console.log("Validating form...");
    let errors = "";
    
    let firstName = document.getElementById("fname").value;
    if (firstName == "") {
        errors += "<li>Please enter First Name</li>";
    }

    let lastName = document.getElementById("lname").value;
    if (firstName == "") {
        errors += "<li>Please enter Last Name</li>";
    }

    let email = document.getElementById("email").value;
    if (email == "") {
        errors += "<li>Please enter Email Address</li>";
    }

    let reason = document.getElementsByName("reason");
    let reasonSelected = false;
    for (let i = 0; i < reason.length; i++) {
        if (reason[i].checked) {
            reasonSelected = true;
        }
    }

    if (!reasonSelected) {
        errors += "<li>Please select a Reason for Contact</li>"
    }

    let phone = document.getElementById("phone").value;
    if (phone == "") {
        errors += "<li>Please enter Phone Number</li>";
    }

    let message = document.getElementById("message").value;
    if (message == "") {
        errors += "<li>Please do not leave the Message field empty</li>";
    }

    if (errors != "") {
        document.getElementById("errorList").innerHTML = errors;
        document.getElementById("errorDiv").classList.remove("hidden");
        return false;
    } else {
        document.getElementById("errorList").innerHTML = "";
        document.getElementById("errorDiv").classList.add("hidden");
        return true;
    }
}