import React, {useEffect} from 'react'
import './Crew.css'

import bgCrew from '../../assets/img/crew/background-crew-desktop.jpg'

const Crew = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgCrew})`
    }, []);

    return (
        <div className='crew'>
            <h1>Crew</h1>
        </div>
    )
}

export default Crew