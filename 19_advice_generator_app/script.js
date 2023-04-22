const button = document.querySelector('#btn')
const title = document.querySelector('#card_title');
const content = document.querySelector('#card_text');

myInit = {
    cache: 'no-cache'
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice', myInit)
    .then(response => {
        return response.json()
    })
    .then(data => {
        title.innerHTML = `<h1 class="main__card-title">Advice #${data.slip.id}</h1>`
        content.innerHTML = `<p class="main__card-text">"${data.slip.advice}"</p>`
    })
}

button.addEventListener('click', () => {
    getAdvice()
})

document.onload = getAdvice();