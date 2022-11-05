const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const passwordInput = document.getElementById('password');
const passwordConformationInput = document.getElementById('password-conformation');

const submitButton = document.querySelector('.button-container')

const NAME_REGEX = new RegExp(/^[A-Z]([a-z]+)?$/)
const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com$/)
const MELBOURNE_PHONE_REGEX = new RegExp (/^(04[0-9]{8}){1}$/)
const PASSWORD_REGEX = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%-_^&*\.])[a-zA-Z0-9!@#$%-_^&*\.]{8,25}$/)

const nameErrorMessage = "name must start with a capital and then lowercase";
const emailErrorMessage = "invalid email"
const numberErrorMessage = "Must start with 04 and be 10 digits total"
const passwordErrorMessage = "must have a digit, special character and be between 8 - 25 characters"

 const fieldsPatterns = {
    name: [nameInput,NAME_REGEX, nameErrorMessage],
    email: [emailInput, EMAIL_REGEX, emailErrorMessage],
    number: [number, MELBOURNE_PHONE_REGEX, numberErrorMessage],
    password: [passwordInput, PASSWORD_REGEX, passwordErrorMessage],
    passwordConformation: [passwordConformationInput, PASSWORD_REGEX],
}

let timer;
let typingTimer;
let typingTimer2;
let typingTimerInterval = 1000

nameInput.addEventListener('input', (e)=>{
    delayedValidationCheck(e.target.id)
    displayError(e.target.id)
});
emailInput.addEventListener('input', (e)=>{
    delayedValidationCheck(e.target.id)
    displayError(e.target.id)
});
passwordInput.addEventListener('input', (e)=>{
    delayedValidationCheck(e.target.id)
    displayError(e.target.id)
});
numberInput.addEventListener('input', (e)=>{
    delayedValidationCheck(e.target.id)
    displayError(e.target.id)
});


function testValues (fieldValue,regex) {
    return regex.test(fieldValue)
};

function delayedValidationCheck(fieldString) {
    clearTimeout(typingTimer);
    const field = fieldsPatterns[fieldString][0]
    typingTimer = setTimeout(()=>{
        if (testValues(field.value, fieldsPatterns[fieldString][1]) 
            || (fieldString = "number" && !field.value)) //becuase number is not manditory
                    field.setCustomValidity('')//field is now valid
        else field.setCustomValidity('invalid')//field is now invalid
    }, typingTimerInterval);
};

function displayError (fieldString) {
    const field = fieldsPatterns[fieldString][0];
    const errorSpan = document.querySelector(`#${field.id} ~ span`);
    clearTimeout(typingTimer2);
    typingTimer2 = setTimeout(()=>{
        if (field.validity.valid || !field.value) errorSpan.textContent = " "
        else errorSpan.textContent = fieldsPatterns[fieldString][2]        
    },typingTimerInterval);
};