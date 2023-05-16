import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

import bgHome from '../../assets/home/background-home-desktop.jpg'

const Home = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgHome})`

        const links = document.querySelectorAll('.navbar__list_item-link');
        const exploreBtn = document.querySelector('.home__grid_explore-btn');
        exploreBtn.addEventListener('click', () => {
            for (let i = 0; i < links.length; i++) {
                if (links[i].classList.contains('navbar__active')) {
                    links[i].classList.remove('navbar__active')
                }
            }
            links[1].classList.add('navbar__active')
        })
    }, []);

    return (
        <div className='home'>

            <div className='home__grid'>
                <div className='home__grid_content'>
                    <h1 className='home__grid_content-title'>So, you want to travel to<br/>
                        <span>Space</span>
                    </h1>
                    <p className='home__grid_content-text'>Let's face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we'll give you a truly out of this world experience!</p>
                </div>

                <div className='home__grid_explore'>
                    <Link to="/destination">
                        <button className='home__grid_explore-btn'>
                            Explore
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home