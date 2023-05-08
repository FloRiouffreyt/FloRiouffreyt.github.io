const buttons = document.querySelectorAll('.btn-rating')

const cardContent = document.querySelector('.rating_state')

const thanksContent = document.querySelector('.rating_thanks')
thanksContent.style.display='none'

const result = document.querySelector('#rating_row')

window.addEventListener('click', e => {
    if (e.target.classList.contains('btn-rating')) {
        for (i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active')
            }
        }
        var rating = e.target.value;
        e.target.classList.add('active');
    } else if (e.target.classList.contains('btn-submit')) {
        for (i=0;i<buttons.length;i++) {
            if (buttons[i].classList.contains('active')) {
                cardContent.style.display='none';
                thanksContent.style.display='flex';
                result.innerHTML = `You selected ${rating} out of 5`;
            }
        }
    } else {
        return false;
    }
})