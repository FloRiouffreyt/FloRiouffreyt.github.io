import React, {useEffect} from 'react'
import './Destination.css'

import bgDestination from '../../assets/img/destination/background-destination-desktop.jpg'
import planetImg from '../../assets/img/destination/image-moon.webp'

const Destination = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgDestination})`
    }, []);

    return (
        <div className='destination'>
            <div className='destination__grid'>
                <h1 className='destination__title'>
                    <span>01</span>
                    pick your destination</h1>

                <div className='destination__image'>
                    <img src={planetImg} alt=""/>
                </div>

                <div className='destination__content'>
                    <ul className='destination__content_nav'>
                        <li className='destination__content_nav_item destination__active'>moon</li>
                        <li className='destination__content_nav_item'>mars</li>
                        <li className='destination__content_nav_item'>europa</li>
                        <li className='destination__content_nav_item'>titan</li>
                    </ul>
                    <h2 className='destination__content_name'>PLANET</h2>
                    <p className='destination__content_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                        iusto pariatur dolor cum accusantium voluptatem minus officia amet impedit,
                        consequuntur distinctio incidunt eveniet nostrum?</p>
                    <div className='destination__content_numbers'>
                        <div className='destination__content_numbers_distance'>
                            <p className='destination__content_numbers_distance_text'>avg. distance</p>
                            <p className='destination__content_numbers_distance_numbers'>x km</p>
                        </div>
                        <div className='destination__content_numbers_time'>
                            <p className='destination__content_numbers_time_text'>est. travel time</p>
                            <p className='destination__content_numbers_time_numbers'>X days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination