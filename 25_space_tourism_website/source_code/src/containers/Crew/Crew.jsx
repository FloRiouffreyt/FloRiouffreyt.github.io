import React, {useEffect} from 'react'
import './Crew.css'

import bgCrew from '../../assets/crew/background-crew-desktop.jpg'
import imgCrew from '../../assets/crew/image-douglas-hurley.webp'

const Crew = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgCrew})`
    }, []);

    return (
        <div className='crew'>
            <div className='crew__grid'>
                <h1 className='crew__title'>
                    <span>02</span>meet your crew</h1>

                <img className='crew__img' src={imgCrew} alt=""/>

                <div className='crew__content'>
                    <h2 className='crew__content_role'>commander</h2>
                    <h3 className='crew__content_name'>douglas hurley</h3>
                    <p className='crew__content_text'>
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and
                        former NASA astronaut. He launched into space for the third time as commander of
                        Crew Dragon Demo-2.
                    </p>
                    <div className='crew__content_slider'>
                        SLIDER
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew