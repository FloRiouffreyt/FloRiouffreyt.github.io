const cardNameInput = document.querySelector('#card-name');
const cardNumInput = document.querySelector('#card-num');
const cardDateMInput = document.querySelector('#card-date-mm');
const cardDateYInput = document.querySelector('#card-date-yy');
const cardCVCInput = document.querySelector('#card-cvc');

const cardName = document.querySelector('.main__card_front-name');
const cardNum = document.querySelector('.main__card_front-number');
const cardDateM = document.querySelector('.main__card_front-date-m');
const cardDateY = document.querySelector('.main__card_front-date-y');
const cardCVC = document.querySelector('.main__card_back-cvc');

const form = document.querySelector('.main__form');
const formComplete = document.querySelector('.main__form_complete');
const confirmBtn = document.querySelector('#confirm-btn');

cardNameInput.addEventListener('keyup', e => {
    if (e.target.value.length > 26) {
        return false;
    } else if (e.target.value !== '') {
        cardName.textContent = e.target.value
    } else {
        cardName.textContent = "jane appleseed";
    }
});

cardNumInput.addEventListener('keyup', e => {
    let cardNumValue = e.target.value;
    let cardNameDisplay = cardNumValue.match(/.{1,4}/g);

    if (e.target.value.length > 16) {
        return false;
    } else if (cardNumValue !== '') {
        cardNum.textContent = cardNameDisplay.join(' ')
    } else {
        cardNum.textContent = "0000 0000 0000 0000";
    }
});

cardDateMInput.addEventListener('keyup', e => {
    if (e.target.value.length > 2) {
        return false;
    } else if (e.target.value !== '') {
        cardDateM.textContent = e.target.value
    } else {
        cardDateM.textContent = "00";
    }
});

cardDateYInput.addEventListener('keyup', e => {
    if (e.target.value.length > 2) {
        return false;
    } else if (e.target.value !== '') {
        cardDateY.textContent = e.target.value
    } else {
        cardDateY.textContent = "00";
    }
});

cardCVCInput.addEventListener('keyup', e => {
    if (e.target.value.length > 3) {
        return false;
    } else if (e.target.value !== '') {
        cardCVC.textContent = e.target.value
    } else {
        cardCVC.textContent = "000";
    }
});

confirmBtn.addEventListener('click', e => {
    e.preventDefault();
    form.classList.add('hidden');
    formComplete.classList.remove('hidden');
})