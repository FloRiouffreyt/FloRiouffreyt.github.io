const billingCheck = document.querySelector('#billing-check');

billingCheck.addEventListener('click', e => {
    if (e.target.checked) {
        billingCheck.classList.add('checked')
    } else {
        billingCheck.classList.remove('checked')
    }
})