// ---------- ERRORS

function displayErrorWithText(input, error) {
    if (input.value <= 0) {
        input.value = 0;
        input.classList.add('error-input');
        error.classList.remove('hidden');
    } else {
        input.classList.remove('error-input');
        error.classList.add('hidden');
    }
}

function displayErrorWithoutText(input) {
    if (input.value <= 0) {
        input.value = 0;
        input.classList.add('error-input');
    } else {
        input.classList.remove('error-input');
    }
}

const inputBill = document.querySelector('#bill');
const inputBillError = document.querySelector('#bill-error');

const inputTip = document.querySelector('#tip');

const inputPeople = document.querySelector('#people');
const inputPeopleError = document.querySelector('#people-error');

const tipButtons = document.querySelectorAll('.tip-btn');

inputBill.addEventListener('change', () => {
    displayErrorWithText(inputBill, inputBillError);
})

inputTip.addEventListener('change', () => {
    displayErrorWithoutText(inputTip);
    for (let i = 0; i < tipButtons.length; i++) {
        if (tipButtons[i].classList.contains('active')) {
            tipButtons[i].classList.remove('active');
        }
    }
})

inputPeople.addEventListener('change', () => {
    displayErrorWithText(inputPeople, inputPeopleError);
})

// ---------- BUTTONS ACTIVATED

window.addEventListener('click', e => {
    if (!e.target.matches('.tip-btn')) {
        return false;
    } else {
        for (let i = 0; i < tipButtons.length; i++) {
            if (tipButtons[i].classList.contains('active')) {
                tipButtons[i].classList.remove('active');
                e.target.classList.add('active');
                inputTip.value = "";
                inputTip.classList.remove('error-input')
            } else {
                e.target.classList.add('active');
                inputTip.value = "";
                inputTip.classList.remove('error-input')
            }
        }
    }
})

// ---------- TIPS CALCUTATIONS

const resultTip = document.querySelector('#result-tip');
const resultTotal = document.querySelector('#result-total');

window.addEventListener('change', () => {

    let bill = parseFloat(inputBill.value);
    let people = parseInt(inputPeople.value);
    
    if (inputTip.value !== '') {
        var tip = parseFloat(parseFloat(inputTip.value) / 100);
    } else if (inputTip.value === '') {
        for (let i = 0; i < tipButtons.length; i++) {
            if (tipButtons[i].classList.contains('active')) {
                var tip = tipButtons[i].value;
            }
        }
    }

    tipAmountPerPerson = (bill * tip) / people;
    totalPerPerson = (bill / people) + tipAmountPerPerson;

    isNaN(tipAmountPerPerson) || tipAmountPerPerson === Infinity ? resultTip.innerHTML = "$0.00" : resultTip.innerHTML = '$' + tipAmountPerPerson.toFixed(2);
    isNaN(totalPerPerson) || totalPerPerson === Infinity ? resultTotal.innerHTML = "$0.00" : resultTotal.innerHTML = '$' + totalPerPerson.toFixed(2);

})

// ---------- RESET BUTTON

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {

    inputBill.value = "";
    inputTip.value = "";
    inputTip.classList.remove('error-input')
    inputPeople.value = "";
    resultTip.innerHTML = "$0.00";
    resultTotal.innerHTML = "$0.00";

    for (let i = 0; i < tipButtons.length; i++) {
        if (tipButtons[i].classList.contains('active')) {
            tipButtons[i].classList.remove('active');
        }
    }

})