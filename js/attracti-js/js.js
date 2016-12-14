
var form = document.forms.contactForm;

var formName = form.elements.name;
function labelTop_1() {
	var addClass = document.getElementById("label-1");
	if (formName.value != "" ) {
		if (addClass) {
			addClass.classList.add("contact-form__label-top");
		}
	}	else  {
		addClass.classList.remove("contact-form__label-top");
	}

} 
var formEmail = form.elements.email;
function labelTop_2() {
	var addClass = document.getElementById("label-2");
	if (formEmail.value != "" ) {
		if (addClass) {
			addClass.classList.add("contact-form__label-top");
		}

	}	else  {
		addClass.classList.remove("contact-form__label-top");
	}

} 
var formPhone = form.elements.phone;
function labelTop_3() {
	var addClass = document.getElementById("label-3");
	if (formPhone.value != "" ) {
		if (addClass) {
			addClass.classList.add("contact-form__label-top");
		}

	}	else  {
		addClass.classList.remove("contact-form__label-top");
	}

} 
var formMessage = form.elements.message;
function labelTop_4() {
	var addClass = document.getElementById("label-4");
	var addClassTextArea = document.getElementById("message");
	if (formMessage.value != "" ) {	
		if (addClass) {
			addClass.classList.add("contact-form__label-top");
		}
		if (addClassTextArea) {
			addClassTextArea.classList.add("text-area--active");
		}	

	}	else  {
		addClass.classList.remove("contact-form__label-top");
		addClassTextArea.classList.remove("text-area--active");
	}

} 