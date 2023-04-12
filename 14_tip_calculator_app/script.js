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

inputBill.addEventListener('change', () => {
    displayErrorWithText(inputBill, inputBillError);
})

inputTip.addEventListener('change', () => {
    displayErrorWithoutText(inputTip);
})

inputPeople.addEventListener('change', () => {
    displayErrorWithText(inputPeople, inputPeopleError);
})

//  TIPS CALCUTATIONS

