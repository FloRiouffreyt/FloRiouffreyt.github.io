import React, {useEffect, useState} from 'react'
import './Destination.css'

import bgDestination from '/assets/destination/background-destination-desktop.jpg'

const Destination = () => {
    
    const tabs = document.querySelectorAll('.destination__content_nav_item')
    const [data, setData] = useState();

    const getData = i => {
        fetch('data.json')
        .then(resp => {
            return resp.json()
        })
        .then(myData => {
            setData(myData.destinations[i])
        })
    }

    useEffect(() => {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].classList.contains('destination__active')) {
                        tabs[i].classList.remove('destination__active')
                    }
                }
            tab.classList.add('destination__active')
            })
        })
    }, [tabs]);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgDestination})`
        getData(0)
    }, []);

    return (
        <div className='destination'>
            <div className='destination__grid'>
                <h1 className='destination__title'>
                    <span>01</span>
                    pick your destination</h1>

                <div className='destination__image'>
                    {data && <img src={data.images.webp} alt="planet image"/>}
                </div>

                <div className='destination__content'>
                    <ul className='destination__content_nav'>
                        <li onClick={() => getData(0)} id='moon' className='destination__content_nav_item destination__active'>moon</li>
                        <li onClick={() => getData(1)} id='mars' className='destination__content_nav_item'>mars</li>
                        <li onClick={() => getData(2)} id='europa' className='destination__content_nav_item'>europa</li>
                        <li onClick={() => getData(3)} id='titan' className='destination__content_nav_item'>titan</li>
                    </ul>
                    {data && <h2 className='destination__content_name'>{data.name}</h2>}
                    {data && <p className='destination__content_text'>{data.description}</p>}
                    <div className='destination__content_numbers'>
                        <div className='destination__content_numbers_distance'>
                            <p className='destination__content_numbers_distance_text'>avg. distance</p>
                            {data && <p className='destination__content_numbers_distance_numbers'>{data.distance}</p>}
                        </div>
                        <div className='destination__content_numbers_time'>
                            <p className='destination__content_numbers_time_text'>est. travel time</p>
                            {data && <p className='destination__content_numbers_time_numbers'>{data.travel}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination