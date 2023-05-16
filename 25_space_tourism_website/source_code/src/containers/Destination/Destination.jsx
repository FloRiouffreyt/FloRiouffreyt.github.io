import React, {useEffect, useState} from 'react'
import './Destination.css'

import bgDestination from '../../assets/destination/background-destination-desktop.jpg'

const Destination = () => {
    
    const [data, setData] = useState();

    const getData = () => {
        fetch('data.json')
        .then(resp => {
            return resp.json()
        })
        .then(myData => {
            console.log(myData.destinations);
            setData(myData.destinations)
        })
    }
        
    useEffect(() => {
        getData()
    }, []);

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
                    {data && data.length>0 && <img src={data[0].images.webp} alt=""/>}
                </div>

                <div className='destination__content'>
                    <ul className='destination__content_nav'>
                        <li className='destination__content_nav_item destination__active'>moon</li>
                        <li className='destination__content_nav_item'>mars</li>
                        <li className='destination__content_nav_item'>europa</li>
                        <li className='destination__content_nav_item'>titan</li>
                    </ul>
                    {data && data.length>0 && <h2 className='destination__content_name'>{data[0].name}</h2>}
                    {data && data.length>0 && <p className='destination__content_text'>{data[0].description}</p>}
                    <div className='destination__content_numbers'>
                        <div className='destination__content_numbers_distance'>
                            <p className='destination__content_numbers_distance_text'>avg. distance</p>
                            {data && data.length>0 && <p className='destination__content_numbers_distance_numbers'>{data[0].distance}</p>}
                        </div>
                        <div className='destination__content_numbers_time'>
                            <p className='destination__content_numbers_time_text'>est. travel time</p>
                            {data && data.length>0 && <p className='destination__content_numbers_time_numbers'>{data[0].travel}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination