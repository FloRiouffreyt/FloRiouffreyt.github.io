const cardNameInput = document.querySelector('#card-name');
const cardNameError = document.querySelector('#card-name-error');

const cardNumInput = document.querySelector('#card-num');
const cardNumError = document.querySelector('#card-num-error');

const cardDateMInput = document.querySelector('#card-date-mm');
const cardDateYInput = document.querySelector('#card-date-yy');
const cardDateError = document.querySelector('#card-date-error');

const cardCVCInput = document.querySelector('#card-cvc');
const cardCVCError = document.querySelector('#card-cvc-error');

const cardName = document.querySelector('.main__card_front-name');
const cardNum = document.querySelector('.main__card_front-number');
const cardDateM = document.querySelector('.main__card_front-date-m');
const cardDateY = document.querySelector('.main__card_front-date-y');
const cardCVC = document.querySelector('.main__card_back-cvc');

const form = document.querySelector('.main__form');
const formComplete = document.querySelector('.main__form_complete');
const confirmBtn = document.querySelector('#confirm-btn');

cardNameInput.addEventListener('keyup', e => {
    cardNameInput.classList.contains('error-input')
    && cardNameInput.classList.remove('error-input');
    cardNameError.style.display = 'none';
    if (e.target.value.length > 26) {
        return false;
    } else if (e.target.value !== '') {
        cardName.textContent = e.target.value
    } else {
        cardName.textContent = "jane appleseed";
    }
});

cardNumInput.addEventListener('keyup', e => {
    cardNumInput.classList.contains('error-input')
    && cardNumInput.classList.remove('error-input');
    cardNumError.style.display = 'none';
    let cardNumValue = e.target.value;
    let cardNameDisplay = cardNumValue.match(/.{1,4}/g);

    console.log(cardNumValue, cardNumValue.length);

    if (e.target.value.length > 16) {
        return false;
    } else if (cardNumValue !== '') {
        cardNum.textContent = cardNameDisplay.join(' ')
    } else {
        cardNum.textContent = "0000 0000 0000 0000";
    }
});

cardDateMInput.addEventListener('keyup', e => {
    cardDateMInput.classList.contains('error-input')
    && cardDateMInput.classList.remove('error-input');
    cardDateError.style.display = 'none';
    if (e.target.value.length > 2) {
        return false;
    } else if (e.target.value !== '') {
        cardDateM.textContent = e.target.value
    } else {
        cardDateM.textContent = "00";
    }
});

cardDateYInput.addEventListener('keyup', e => {
    cardDateYInput.classList.contains('error-input')
    && cardDateYInput.classList.remove('error-input');
    cardDateError.style.display = 'none';
    if (e.target.value.length > 2) {
        return false;
    } else if (e.target.value !== '') {
        cardDateY.textContent = e.target.value
    } else {
        cardDateY.textContent = "00";
    }
});

cardCVCInput.addEventListener('keyup', e => {
    cardCVCInput.classList.contains('error-input')
    && cardCVCInput.classList.remove('error-input');
    cardCVCError.style.display = 'none';
    if (e.target.value.length > 4) {
        return false;
    } else if (e.target.value !== '') {
        cardCVC.textContent = e.target.value
    } else {
        cardCVC.textContent = "000";
    }
});

const regLetters = /^[a-zA-ZÀ-ÿ- ]*$/
const regNumbers = /^[0-9]*$/

confirmBtn.addEventListener('click', e => {
    e.preventDefault();

    if (cardNameInput.value === '') {
        cardNameInput.classList.add('error-input');
        cardNameError.style.display = 'block';
    }
    if (cardNumInput.value === '') {
        cardNumInput.classList.add('error-input');
        cardNumError.style.display = 'block';
        cardNumError.textContent = "Can't be blank";
    }
    if (cardDateMInput.value === '') {
        cardDateMInput.classList.add('error-input');
        cardDateError.style.display = 'block';
    }
    if (cardDateYInput.value === '') {
        cardDateYInput.classList.add('error-input');
        cardDateError.style.display = 'block';
    }
    if (cardCVCInput.value === '') {
        cardCVCInput.classList.add('error-input');
        cardCVCError.style.display = 'block';
    }

    if (cardNameInput.value === '' || cardNumInput.value === '' || cardDateMInput.value === '' || cardDateYInput.value === '' || cardCVCInput.value === '') {
        return false;
    }

    if (!cardNameInput.value.match(regLetters)) {
        cardNameInput.classList.add('error-input');
        cardNameError.style.display = 'block';
        cardNameError.textContent = "Wrong format, letters only";
        return false;
    }
    if (!cardNumInput.value.match(regNumbers)) {
        cardNumInput.classList.add('error-input');
        cardNumError.style.display = 'block';
        return false;
    }
    if (!cardDateMInput.value.match(regNumbers)) {
        cardDateMInput.classList.add('error-input');
        cardDateError.style.display = 'block';
        cardDateError.textContent = "Wrong format, numbers only";
        return false;
    }
    if (!cardDateYInput.value.match(regNumbers)) {
        cardDateYInput.classList.add('error-input');
        cardDateError.style.display = 'block';
        cardDateError.textContent = "Wrong format, numbers only";
        return false;
    }
    if (!cardCVCInput.value.match(regNumbers)) {
        cardCVCInput.classList.add('error-input');
        cardCVCError.style.display = 'block';
        cardCVCError.textContent = "Wrong format, numbers only";
        return false;
    }

    form.classList.add('hidden');
    formComplete.classList.remove('hidden');
})

function resetInput() {
    cardNameInput.value = '';
    cardNumInput.value = '';
    cardDateMInput.value = '';
    cardDateYInput.value = '';
    cardCVCInput.value = '';
}

window.onload = resetInput();