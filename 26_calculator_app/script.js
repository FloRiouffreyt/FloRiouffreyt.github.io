let calc = 1 * 1234567
let calcFormat = calc.toString().split('').reverse().join('').match(/.{1,3}/g).map(function(x){
    return x.split('').reverse().join('')
}).reverse()


const resultField = document.querySelector('#result')
resultField.value = calcFormat

// THEME SWITCH BUTTON
const storeTheme = theme => {
    localStorage.setItem('theme', theme)
}

const themeSwitch = document.querySelectorAll('input[type="radio"]')

themeSwitch.forEach(theme => {
    theme.addEventListener('click', e => {
        if (e.target.id === 'light') {
            document.documentElement.setAttribute('data-theme', 'light')
            storeTheme(e.target.id)
        }
        if (e.target.id === "alt") {
            document.documentElement.setAttribute('data-theme', 'alt')
            storeTheme(e.target.id)
        }
        if (e.target.id === "dark") {
            document.documentElement.setAttribute('data-theme', 'dark')
            storeTheme(e.target.id)
        }
    })
})

// DEFAULT THEME ON PAGE LOAD
const lightBtn = document.querySelector('#light')
const altBtn = document.querySelector('#alt')
const darkBtn = document.querySelector('#dark')

const getFavTheme = () => {
    const favTheme = localStorage.getItem('theme')
    if (favTheme === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark')
            darkBtn.checked = true
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            lightBtn.checked = true
        }
    } else if (favTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
        lightBtn.checked = true
    } else if (favTheme === 'alt') {
        document.documentElement.setAttribute('data-theme', 'alt')
        altBtn.checked = true
    } else if (favTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
        darkBtn.checked = true
    }
}

window.onload = getFavTheme()