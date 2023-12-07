/********f************
    
    Project 4 Stylesheet
    Name:
    Date:
    Description:

*********************/

function validate(e) {
	hideAllErrors();
 
	if (formHasErrors()) {
		e.preventDefault();
		return false;
	}
 
	return true;
}

function resetForm(e) {
	if (confirm('Reset?')) {
		hideAllErrors();
 
		document.getElementById("fullname").focus();
 
		return true;
	}

	e.preventDefault();
	return false;
}

function formHasErrors() {
	let errorFlag = false;
 
	let requiredFields = ["fullname","phonenumber","email"];
 
	for(let i = 0; i < requiredFields.length; i++){
		let textField = document.getElementById(requiredFields[i]);
		if(!formFieldHasInput(textField)){
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
 
			if(!errorFlag){
				textField.focus();
				textField.select();
			}
 
			errorFlag = true;
		}
	}
 
	let phoneNumberRegex = new RegExp(/^\d{10}$/);
	let phoneNumberValue = document.getElementById("phonenumber").value;
 
	if(!phoneNumberRegex.test(phoneNumberValue)){
		document.getElementById("phonenumberformat_error").style.display = "block";
 
		if(!errorFlag){
			document.getElementById("phonenumber").focus();
			document.getElementById("phonenumber").select();
		}
 
		errorFlag = true;
	}

	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let emailValue = document.getElementById("email").value;

	if (!emailRegex.test(emailValue)) {
		document.getElementById("emailformat_error").style.display = "block";

		errorFlag = true;
	}


	return errorFlag;
}

function hideAllErrors() {
 
	let errorFields = document.getElementsByClassName("error");
	for(let i = 0; i < errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
 
}

function formFieldHasInput(fieldElement) {
	if (fieldElement.value == null || fieldElement.value.trim() == "") {

		return false;
	}
 
	// Valid entry
	return true;
}

function load() {
	document.getElementById("contact_form").addEventListener("submit", validate);
 t
	document.getElementById("contact_form").reset();
 
	document.getElementById("contact_form").addEventListener("reset", resetForm);
 
	hideAllErrors();
 
}
 
document.addEventListener("DOMContentLoaded", load);