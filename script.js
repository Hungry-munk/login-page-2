const nameInput = document.getElementById('name');
const EmailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const passwordInput = document.getElementById('password');
const passwordConformationInput = document.getElementById('password-conformation');

const submitButton = document.querySelector('.button-container')

const NAME_REGEX = new RegExp(/^[A-Z][a-z]+$/)
const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com$/)
const MELBOURNE_PHONE_REGEX = new RegExp (/^(04[0-9]{8}){1}$/)
const PASSWORD_REGEX = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%-_^&*\.])[a-zA-Z0-9!@#$%-_^&*\.]{8,25}$/)

 const fieldsPatterns = {
    name: [nameInput,NAME_REGEX],
    email : [EmailInput, EMAIL_REGEX],
    password:[passwordConformationInput, PASSWORD_REGEX],
    number: [number, MELBOURNE_PHONE_REGEX]
 }
