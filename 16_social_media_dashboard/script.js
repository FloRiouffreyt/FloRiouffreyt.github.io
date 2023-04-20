const themeBtn = document.querySelector('#theme-btn');
const styles = document.querySelector('#styles');

const storeTheme = theme => {
    localStorage.setItem('theme', theme)
}

const defaultTheme = () => {
    const activeTheme = localStorage.getItem('theme')
    if (activeTheme === 'light') {
        styles.attributes.href.value = 'assets/css/light.css';
    } else if (activeTheme === 'dark') {
        styles.attributes.href.value = 'assets/css/dark.css';
        themeBtn.classList.toggle('active')
    }
}

themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('active');
    if (themeBtn.checked) {
        styles.attributes.href.value = 'assets/css/dark.css';
        storeTheme('dark');
    } else if (!themeBtn.checked) {
        styles.attributes.href.value = 'assets/css/light.css'
        storeTheme('light');
    }
})

document.onload = defaultTheme();