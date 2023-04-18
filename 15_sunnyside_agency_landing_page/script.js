const mobileBtn = document.querySelector('#mobile-btn');
const mobileMenu = document.querySelector('#mobile-menu')

mobileBtn.addEventListener('click', () => {
    mobileMenu
        .classList
        .toggle('hidden');
})

window.addEventListener('click', e => {
    console.log(e.target);
    if (!e.target.matches('#mobile-btn')) {
        if (!e.target.matches('.header__top_nav-list--mobile')) {
            if (!e.target.matches('.header__top_nav-item--mobile')) {
                if (!e.target.matches('.header__top_nav-item-contact--mobile')) {
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu
                            .classList
                            .add('hidden')
                    }
                }
            }
        }
    }
})
