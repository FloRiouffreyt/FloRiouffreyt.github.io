import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './NavbarMobile.css'

const NavbarMobile = ( {hideMobileNav} ) => {
    
    useEffect(() => {
        const links = document.querySelectorAll('.navbar__mobile_list_item-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                for (let i = 0; i < links.length; i++) {
                    if (links[i].classList.contains('navbar__mobile_active')) {
                        links[i].classList.remove('navbar__mobile_active')
                    }
                }
                link.classList.add('navbar__mobile_active')
            })
        })
    }, []);

    return (
        <>
            <ul className='navbar__mobile_list'>
                <li className='navbar__mobile_list_item'>
                    <Link to="/" className='navbar__mobile_list_item-link' onClick={hideMobileNav}>
                        <span>00</span>home
                    </Link>
                </li>
                <li className='navbar__mobile_list_item'>
                    <Link to="/destination" className='navbar__mobile_list_item-link' onClick={hideMobileNav}>
                        <span>01</span>destination
                    </Link>
                </li>
                <li className='navbar__mobile_list_item'>
                    <Link to="/crew" className='navbar__mobile_list_item-link' onClick={hideMobileNav}>
                        <span>02</span>crew
                    </Link>
                </li>
                <li className='navbar__mobile_list_item'>
                    <Link to="/technology" className='navbar__mobile_list_item-link' onClick={hideMobileNav}>
                        <span>03</span>technology
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavbarMobile