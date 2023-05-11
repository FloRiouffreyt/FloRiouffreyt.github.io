import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    
    useEffect(() => {
        const links = document.querySelectorAll('.navbar__list_item-link');
        links.forEach(link => {
            link.addEventListener('click', e => {
                for (let i = 0; i < links.length; i++) {
                    if (links[i].classList.contains('navbar__active')) {
                        links[i].classList.remove('navbar__active')
                    }
                }
                link.classList.add('navbar__active')
            })
        })
    }, []);

    return (
        <>
            <ul className='navbar__list'>
                <li className='navbar__list_item'>
                    <Link to="/" className='navbar__list_item-link navbar__active'>
                        <span>00</span>home
                    </Link>
                </li>
                <li className='navbar__list_item'>
                    <Link to="/destination" className='navbar__list_item-link'>
                        <span>01</span>destination
                    </Link>
                </li>
                <li className='navbar__list_item'>
                    <Link to="/crew" className='navbar__list_item-link'>
                        <span>02</span>crew
                    </Link>
                </li>
                <li className='navbar__list_item'>
                    <Link to="/technology" className='navbar__list_item-link'>
                        <span>03</span>technology
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar