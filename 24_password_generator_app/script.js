const passwordField = document.querySelector('#password');
const range = document.querySelector('#strength');
const rangeValue = document.querySelector('#strength-value');
const submit = document.querySelector('.main__card_generator_submit');

const upperCaseCheck = document.querySelector('#upperc');
const lowerCaseCheck = document.querySelector('#lowerc');
const numCheck = document.querySelector('#num');
const symbolCheck = document.querySelector('#symb');

function defaultValue() {
    range.value = 10;
    rangeValue.textContent = range.value;
}

range.addEventListener('input', () => {
    rangeValue.textContent = range.value;
    document.documentElement.style.setProperty('--color-bg-slider', 'linear-gradient(90deg, #a4ffaf, #a4ffaf '+ (range.value*10)/2 +'%, #18171f '+ (range.value*10)/2 +'%, #18171f)')
})

const symbols = ['!', '#', '$', '%', '&', '*', '+', '-', '?', '@', '^', '_', '~'];

submit.addEventListener('click', () => {
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
})

window.onload = defaultValue();