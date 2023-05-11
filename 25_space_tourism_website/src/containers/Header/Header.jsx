import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

import {Navbar} from '../../components'

const Header = () => {

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
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                    </g>
                </svg>
            </div>
            </Link>
            <div className='header__navbar'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header