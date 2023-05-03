const billingCheck = document.querySelector('#billing-check');

const viewField = document.querySelector('#views');
const rateField = document.querySelector('#rate');
const slider = document.querySelector('#range-slider');

const views = [10, 50, 100, 500, 1];
const rates = [8, 12, 16, 24, 36];
var discountRates = rates;
const discount = 0.75;

function displayPlan(index, value = 'k') {
    document.documentElement.style.setProperty('--color-bg-slider', 'linear-gradient(90deg, #A4F3EB, #A4F3EB ' + slider.value + '%, #ECF0FB ' + slider.value + '%, #ECF0FB)')
    viewField.textContent = views[index] + value;
    rateField.textContent = '$' + discountRates[index].toFixed(2);
}

function valueSwitch() {
    switch (slider.value) {
        case '0':
            displayPlan(0)
            break;
        case '25':
            displayPlan(1)
            break;
        case '50':
            displayPlan(2)
            break;
        case '75':
            displayPlan(3)
            break;
        case '100':
            displayPlan(4, 'm')
            break;

        default:
            displayPlan(2)
            break;
    }
}

billingCheck.addEventListener('click', e => {
    discountRates = []
    if (e.target.checked) {
        billingCheck.classList.add('checked')
        for (let i = 0; i < rates.length; i++) {
            discountRates.push(rates[i] * discount)        
        }
    } else {
        billingCheck.classList.remove('checked')
        for (let i = 0; i < rates.length; i++) {
            discountRates.push(rates[i])        
        }
    }
    valueSwitch();
})

slider.addEventListener('change', () => {
    valueSwitch();
})

window.onload = billingCheck.checked = false;
window.onload = displayPlan(2);