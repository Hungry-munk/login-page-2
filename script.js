const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const passwordInput = document.getElementById('password');
const passwordConformationInput = document.getElementById('password-conformation');

const submitButton = document.querySelector('.button-container')

const NAME_REGEX = new RegExp(/^[A-Z]+[a-z]+$/)
const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com$/)
const MELBOURNE_PHONE_REGEX = new RegExp (/^(04[0-9]{8}){1}$/)
const PASSWORD_REGEX = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%-_^&*\.])[a-zA-Z0-9!@#$%-_^&*\.]{8,25}$/)

 const fieldsPatterns = {
    name: [nameInput,NAME_REGEX],
    email: [emailInput, EMAIL_REGEX],
    number: [number, MELBOURNE_PHONE_REGEX],
    password: [passwordInput, PASSWORD_REGEX],
    passwordConformation: [passwordConformationInput, PASSWORD_REGEX],
}

nameInput.addEventListener('input', ()=>{delayedValidationCheck('name')});
emailInput.addEventListener('input', ()=>{delayedValidationCheck('email')});
numberInput.addEventListener('input', ()=>{delayedValidationCheck('number')});
passwordInput.addEventListener('input', ()=>{delayedValidationCheck('password')});


let timer;
let typingTimer;
let typingTimerInterval = 1000



function testValues (fieldValue,regex) {
    return regex.test(fieldValue)
};

function delayedValidationCheck(fieldString) {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(()=>{
        if (testValues(fieldsPatterns[fieldString][0].value,fieldsPatterns[fieldString][1])) {
            fieldsPatterns[fieldString][0].setCustomValidity('')
        } else {
            fieldsPatterns[fieldString][0].setCustomValidity('invalid')
        }
    }, typingTimerInterval);


}