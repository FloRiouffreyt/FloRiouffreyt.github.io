import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

import {Navbar, NavbarMobile} from '../../components'

const Header = () => {

    
    const showMobileNav = () => {
        const mobileNav = document.querySelector('.header__navbar_mobile')
        const mobileNavOpen = document.querySelector('.mobile__menu')
        const mobileNavClose = document.querySelector('.mobile__menu_close')
        mobileNav.classList.remove('hidden')
        mobileNavOpen.style = 'display:none'
        mobileNavClose.style = 'display:block'
    }
    
    const hideMobileNav = () => {
        const mobileNav = document.querySelector('.header__navbar_mobile')
        const mobileNavOpen = document.querySelector('.mobile__menu')
        const mobileNavClose = document.querySelector('.mobile__menu_close')
        mobileNav.classList.add('hidden')
        mobileNavOpen.style = 'display:block'
        mobileNavClose.style = 'display:none'
    }

    useEffect(() => {
        const links = document.querySelectorAll('.navbar__list_item-link');
        const homeBtn = document.querySelector('.header__logo');
        homeBtn.addEventListener('click', () => {
            for (let i = 0; i < links.length; i++) {
                if (links[i].classList.contains('navbar__active')) {
                    links[i].classList.remove('navbar__active')
                }
            }
            links[0].classList.add('navbar__active')
        })
    }, []);

    return (
        <div className='header'>
            <Link to="/">
                <div className='header__logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="none" fillRule="evenodd">
                            <circle cx="24" cy="24" r="24" fill="#FFF"/>
                            <path
                                fill="#0B0D17"
                                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                        </g>
                    </svg>
                </div>
            </Link>
            <div className='header__decoration'></div>
            <div className='header__navbar'>
                <Navbar/>
            </div>
            <button className='mobile__menu' onClick={() => showMobileNav()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                    <g fill="#D0D6F9" fillRule="evenodd">
                        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
                    </g>
                </svg>
            </button>
            <button className='mobile__menu_close' onClick={() => hideMobileNav()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                    <g fill="#D0D6F9" fillRule="evenodd">
                        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                    </g>
                </svg>
            </button>
            <div className='header__navbar_mobile hidden'>
                <NavbarMobile hideMobileNav={hideMobileNav}/>
            </div>
        </div>
    )
}

export default Header