const options = document.querySelectorAll('.main__grid_profile_bottom-option');

options.forEach(option => {
    option.addEventListener('click', e => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains('active')) {
                options[i].classList.remove('active')
            }
        }
        e.target.classList.add('active');
    })
})