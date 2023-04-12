// ERRORS

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
    const customTip = document.querySelector('#tip').value / 100;
})

inputPeople.addEventListener('change', () => {
    displayErrorWithText(inputPeople, inputPeopleError);
})

// BUTTONS ACTIVATED

window.addEventListener('click', e => {
    if (!e.target.matches('.tip-btn')) {
        return false;
    } else {
        for (let i = 0; i < tipButtons.length; i++) {
            if (tipButtons[i].classList.contains('active')) {
                tipButtons[i].classList.remove('active');
                e.target.classList.add('active');
                inputTip.value = "";
            } else {
                e.target.classList.add('active');
                inputTip.value = "";
            }
        }
    }
})

// TIPS CALCUTATIONS

const resultTip = document.querySelector('#result-tip');
const resultTotal = document.querySelector('#result-total');

// total tip = bill value * % of tip (e.g 10% tip for $100 bill => 100 * 0.1 = $10)
// tip per person = total tip / nb of persons (e.g $10 / 2 = $5 each)
// "tip amount per person" = (bill value * tip% ) / nb of persons
// "total per person" = (bill value / nb of persons) + tip amount per person

// const totalTip = inputBill.value * tipAmount;

// RESET BUTTON

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {

    inputBill.value = "";
    inputTip.value = "";
    inputPeople.value = "";
    resultTip.innerHTML = "$0.00";
    resultTotal.innerHTML = "$0.00";

    for (let i = 0; i < tipButtons.length; i++) {
        if (tipButtons[i].classList.contains('active')) {
            tipButtons[i].classList.remove('active');
        }
    }

})