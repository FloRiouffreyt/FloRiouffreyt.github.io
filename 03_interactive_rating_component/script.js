buttons = document.querySelectorAll('.btn-rating')

card_content = document.querySelector('.rating_state')

thanks_content = document.querySelector('.rating_thanks')
thanks_content.style.display='none'

result = document.querySelector('#rating_row')

window.addEventListener('click', e => {
    if (e.target.classList.contains('btn-rating')) {
        for (i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active')
            }
        }
        rating = e.target.value;
        e.target.classList.add('active');
    } else {
        return false;
    }
})

window.addEventListener('click', e => {
    if (e.target.classList.contains('btn-submit')) {
        for (i=0;i<buttons.length;i++) {
            if (buttons[i].classList.contains('active')) {
                card_content.style.display='none';
                thanks_content.style.display='flex';
                result.innerHTML = `You selected ${rating} out of 5`;
            }
        }
    } else {
        return false;
    }
})
