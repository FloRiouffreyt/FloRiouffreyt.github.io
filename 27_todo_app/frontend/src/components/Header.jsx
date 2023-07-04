import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => {

    useEffect(() => {
        const themeBtn = document.querySelector('#theme_switch')
        const getFavTheme = () => {
            const favTheme = localStorage.getItem('theme')
                if (favTheme === null) {
                    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        document.documentElement.setAttribute('data-theme', 'dark')
                        themeBtn.checked = true
                    } else {
                        document.documentElement.setAttribute('data-theme', 'light')
                        themeBtn.checked = false
                    }
                } else if (favTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light')
                    themeBtn.checked = false
                } else if (favTheme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark')
                    themeBtn.checked = true
                }
            }
        getFavTheme()
    }, []);

    const storeTheme = theme => {
        localStorage.setItem('theme', theme)
    }

    const themeSwitch = e => {
        if (!e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light')
            storeTheme('light')
        }
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark')
            storeTheme('dark')
        }
    }

    return (
        <div className='container header'>
            <div className="header__top">
                <Link to='/'>
                    <h1 className='header__logo'>todo</h1>
                </Link>
                <input type="checkbox" name="theme" id="theme_switch" onClick={themeSwitch}/>
            </div>
        </div>
    )
}

export default Header