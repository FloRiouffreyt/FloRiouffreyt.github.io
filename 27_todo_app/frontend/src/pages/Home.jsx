import React from 'react'
import {Link} from 'react-router-dom'
import {Header, HeaderOptions} from '../components'

import './Home.css'

const Home = () => {
    return (
        <>

            <Header/>
            <HeaderOptions />

            <div className='home'>
                <div className='home__title'>
                    <h2>Welcome to your<br /> task management web app</h2>
                </div>
                <div className="home__content">
                    <div className='home__text'>
                        <ul>
                            <li>Streamline your productivity with ease</li>
                            <li>Effortlessly create, update, and prioritize tasks</li>
                            <li>Stay organized and in control</li>
                        </ul>
                    </div>
                    <div className='home__links'>
                        <h4>Create an account or log in<br /> to access your synced task lists across devices</h4>
                        <Link to='/user/login' className='btn'>Login</Link>
                        <Link to='/user/register' className='btn'>Register</Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home