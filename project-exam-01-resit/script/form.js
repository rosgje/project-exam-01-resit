// Contact form validation

var inputName = document.getElementById('input-name');
var inputEmail = document.getElementById('input-email');
var inputMessage = document.getElementById('input-message');
var errorInput = document.getElementById('error-text');
var button = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form')

function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test(inputEmail.value) && inputMessage.value.trim() !== "") {
        document.getElementById("error-text").style.display = "none";
        button.disabled = false;
        document.getElementById("input-email").innerHTML = "valid";
    } else {
        document.getElementById("error-text").innerHTML = "Some fields may be empty or there is an invalid name/email adress!";
        button.disabled = true;
        document.getElementById("input-email").innerHTML = "invalid";
    }
}

// To show that the form has been submitted

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Submitted');
})

// Submit button trigger

function submitTrigger() {
  document.getElementById("submit-text").innerHTML = "Thank you, your message has been successfully sent! We will get back to you. ";
}










