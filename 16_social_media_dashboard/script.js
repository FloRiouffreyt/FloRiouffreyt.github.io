const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', e => {
    themeBtn.classList.toggle('active');
    console.log(e.target.checked)
})