const form = document.querySelector("#contact-form");
const aName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const confirmation = document.querySelector(".confirmation");
const button = document.querySelector("button");

function validateForm(){
    event.preventDefault();

    if(validateLen(aName.value, 0) === true){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(validateLen(subject.value, 9) === true){
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(validateLen(address.value, 24) === true){
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if(validateEmail(email.value, 0) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}
form.addEventListener("submit", validateForm);

function validateLen(value, len){
    if (value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matching = regEx.test(email);
    return matching;
}

button.onclick = function(){
    if(validateLen(aName.value, 0) && validateLen(subject.value, 9) && validateLen(address.value, 24) && validateEmail(email.value, 0)){
        confirmation.style.display = "block";
    } else {
        confirmation.style.display = "none";
    }
}