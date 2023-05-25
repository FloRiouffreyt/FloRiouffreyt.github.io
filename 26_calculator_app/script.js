const resultField = document.querySelector('#result')

// CALCULATOR
const calcInput = document.querySelectorAll('.calculator__board_btn')
var toCalc = []
var buffer = []
var sign = ''
var total = 0

calcInput.forEach(input => {
    input.addEventListener('click', e => {
        if (!input.classList.contains('special')) {
            toCalc.push(e.target.value)
            toCalcDisplay = parseFloat(toCalc.join(''), 10)
            resultField.value = +toCalc.join('')
        } else if (input.classList.contains('special')) {
            if (buffer.length === 0) {
                if (input.id === 'del') {
                    toCalc = []
                    resultField.value = 0
                } else {
                    sign = input.value
                    buffer = toCalc
                    toCalc = []
                } 
                
            } else if (buffer.length > 0) {
                if (input.id === 'equal' || input.id === 'plus' || input.id === 'minus' || input.id === 'times' || input.id === 'divide') {
                    result1 = parseFloat(buffer.join(''), 10)
                    result2 = parseFloat(toCalc.join(''), 10)
                    switch (sign) {
                        case '+':
                        total = result1 + result2
                        break;
                        case '-':
                        total = result1 - result2
                        break;
                        case '*':
                        total = result1 * result2
                        break;
                        case '/':
                        total = result1 / result2
                        break;
                    
                        default:
                            break;
                        }
                    toCalc = []
                    buffer = total.toString().split('')
                    resultField.value = +total.toFixed(10)
                    sign = input.value
                } else if (input.id === 'del') {
                    if (toCalc.length > 0) {
                        toCalc = []
                        resultField.value = 0
                    }
                } else if (input.id === 'reset') {
                    if (toCalc.length > 0 || buffer.length > 0) {
                        buffer = []
                        toCalc = []
                        resultField.value = 0 
                    }
                }
                else {
                    sign = input.value
                }
            } 
        }
    })
})

// resultField.value = toCalcInt.toString().split('').reverse().join('').match(/.{1,3}/g).map(x => {
//     return x.split('').reverse().join('')
//     }).reverse()

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
        if (e.target.id === 'alt') {
            document.documentElement.setAttribute('data-theme', 'alt')
            storeTheme(e.target.id)
        }
        if (e.target.id === 'dark') {
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

window.onload = () => {
    getFavTheme()
    resultField.value = 0
} 