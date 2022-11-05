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
    "password-conformation": [passwordConformationInput, PASSWORD_REGEX],
}

let typingTimer;
let typingTimer2;
let tpyingTimerPassword;
let typingTimerInterval = 1000

nameInput.addEventListener('input', e =>{
    clearTimeout(typingTimer2);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(()=>ValidationCheck(e.target.id), typingTimerInterval)
    typingTimer2 = setTimeout(()=>displayError(e.target.id), typingTimerInterval)
});
emailInput.addEventListener('input', e =>{
    clearTimeout(typingTimer2);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(()=>ValidationCheck(e.target.id), typingTimerInterval)
    typingTimer2 = setTimeout(()=>displayError(e.target.id), typingTimerInterval)
});
numberInput.addEventListener('input', e =>{
    clearTimeout(typingTimer2);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(()=>ValidationCheck(e.target.id), typingTimerInterval)
    typingTimer2 = setTimeout(()=>displayError(e.target.id), typingTimerInterval)
});
passwordInput.addEventListener('input', e =>{
    clearTimeout(typingTimer2);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(()=>ValidationCheck(e.target.id), typingTimerInterval)
    typingTimer2 = setTimeout(()=>displayError(e.target.id), typingTimerInterval)

    clearTimeout(tpyingTimerPassword)
    tpyingTimerPassword = setTimeout(()=>{
        toggleConfirmPassword()
    },3000)
});


nameInput.addEventListener("focusout", e =>{
    ValidationCheck(e.target.id);
    displayError(e.target.id)
    labelGray(e.target.id)
});
nameInput.addEventListener("focusin", e =>labelBlue(e.target.id))

emailInput.addEventListener("focusout", e =>{
    ValidationCheck(e.target.id);
    displayError(e.target.id)
    labelGray(e.target.id)
});
emailInput.addEventListener("focusin", e =>labelBlue(e.target.id))

numberInput.addEventListener("focusout", e =>{
    ValidationCheck(e.target.id);
    displayError(e.target.id)
    labelGray(e.target.id)
});
numberInput.addEventListener("focusin", e =>labelBlue(e.target.id))

passwordInput.addEventListener("focusout", e =>{
    ValidationCheck(e.target.id);
    displayError(e.target.id)
    labelGray(e.target.id)
});
passwordInput.addEventListener("focusin", e =>labelBlue(e.target.id))


function testValues (fieldValue,regex) {
    return regex.test(fieldValue)
};

function ValidationCheck(fieldString) {
    clearTimeout(typingTimer);
    const field = fieldsPatterns[fieldString][0]
    if (testValues(field.value, fieldsPatterns[fieldString][1]) 
        || (fieldString = "number" && !field.value)){ //becuase number is not manditory
            field.setCustomValidity('')//field is now valid
            field.classList.remove('invalid')
        } else {
        field.setCustomValidity('invalid')//field is now invalid
        field.classList.add('invalid')
    };
};

function displayError (fieldString) {
    const field = fieldsPatterns[fieldString][0];
    const errorSpan = document.querySelector(`#${field.id} ~ span`);
    const label = document.querySelector(`#${field.id} ~ label`);
    clearTimeout(typingTimer2);

    if (field.validity.valid || !field.value){
        errorSpan.textContent = " "
        label.style.color = "#1d9bf0"
        }
    else {
        errorSpan.textContent = fieldsPatterns[fieldString][2]
        label.style.color = "#b5051a"
    }
};

function labelGray (fieldString) {
    const field = fieldsPatterns[fieldString][0];
    const label = document.querySelector(`#${field.id} ~ label`);
    if (field.validity.valid) label.style.color = "#a3a3a3"
}

function labelBlue (fieldString) {
    const field = fieldsPatterns[fieldString][0];
    const label = document.querySelector(`#${field.id} ~ label`);
    if (field.validity.valid) label.style.color = "#1d9bf0"
}

function toggleConfirmPassword () {
    if (passwordInput.validity.valid) {
        passwordConformationInput.parentElement.style.display = 'block'
    } else{
        passwordConformationInput.parentElement.style.display = 'none'
    }
}

