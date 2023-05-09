const passwordField = document.querySelector('#password');
const range = document.querySelector('#strength');
const rangeValue = document.querySelector('#strength-value');
const strengthName = document.querySelector('.main__card_generator_strength_level-name');
const strengthLevel = document.querySelector('.main__card_generator_strength_level-bars');
const submit = document.querySelector('.main__card_generator_submit');
const passwordCopy = document.querySelector('.main__card_password_copy');
const passwordCopyAlert = document.querySelector('.main__card_password_copy_alert');

const upperCaseCheck = document.querySelector('#upperc');
const lowerCaseCheck = document.querySelector('#lowerc');
const numCheck = document.querySelector('#num');
const symbolCheck = document.querySelector('#symb');
const symbols = ['!', '#', '$', '%', '&', '*', '+', '?', '@', '^', '_', '~'];
const strengthClassList = ['strong', 'medium', 'weak', 'tooWeak'];

function defaultValue() {
    range.value = 12;
    rangeValue.textContent = range.value;
    passwordField.value = '';
}

function getStrengthClass(strength) {
    strengthName.textContent = strength;
    for (let i = 0; i < strengthClassList.length; i++) {
        strengthLevel.classList.remove(strengthClassList[i]);
    }
    strengthLevel.classList.add(strength);
}

range.addEventListener('input', () => {
    rangeValue.textContent = range.value;
    document.documentElement.style.setProperty('--color-bg-slider', 'linear-gradient(90deg, #a4ffaf, #a4ffaf '+ (range.value*10)/2 +'%, #18171f '+ (range.value*10)/2 +'%, #18171f)')
})


submit.addEventListener('click', () => {
    !passwordCopyAlert.classList.contains('hidden') && passwordCopyAlert.classList.add('hidden');

    let charList = [];
    if (lowerCaseCheck.checked) {
        for (let i = 65; i <= 90; i++) {
            charList.push(String.fromCharCode(i).toLowerCase());
        }
    }
    if (upperCaseCheck.checked) {
        for (let i = 65; i <= 90; i++) {
            charList.push(String.fromCharCode(i));
        }
    }
    if (numCheck.checked) {
        for (let i = 0; i < 10; i++) {
            charList.push(i.toString())    
        }
    }
    if (symbolCheck.checked) {
        for (let i = 0; i < symbols.length; i++) {
            charList.push(symbols[i])
        }
    }

    let passFinal = [];
    let rangeFinal = range.value;

    for (let i = 0; i < rangeFinal; i++) {
        let index = Math.floor(Math.random() * charList.length)
        passFinal.push(charList[index])
    }
    passwordField.value = passFinal.join('')

    const strong = new RegExp('^((?=.{8,})(?=.*([a-z]))(?=.*[A-Z])(?=.*[0-9])(?=.*['+symbols.join('')+']))|(?=.{12,})');
    const medium = new RegExp('^((((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,}))|(?=.{8,12})');
    const weak = new RegExp('^((((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,8}))|(?=.{6,8})');
    const tooWeak = new RegExp('^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.*[A-Z])|(?=.*['+symbols.join('')+']))(?=.{0,6})');

    if (strong.test(passwordField.value)) {
        getStrengthClass('strong')
    } else if (medium.test(passwordField.value)) {
        getStrengthClass('medium')
    } else if (weak.test(passwordField.value)) {
        getStrengthClass('weak')
    } else if (tooWeak.test(passwordField.value)) {
        getStrengthClass('tooWeak')
    } else {
        strengthName.textContent = '';
        for (let i = 0; i < strengthClassList.length; i++) {
            strengthLevel.classList.remove(strengthClassList[i]);
        }
    }

})

passwordCopy.addEventListener('click', () => {
    console.log(passwordField.value);
    if (passwordField.value === '') {
        return false;
    } else {
        passwordCopyAlert.classList.contains('hidden') && passwordCopyAlert.classList.remove('hidden');
        navigator.clipboard.writeText(passwordField.value);
    }
})

window.onload = defaultValue();