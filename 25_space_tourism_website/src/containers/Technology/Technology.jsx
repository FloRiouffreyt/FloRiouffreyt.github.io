import React, {useEffect} from 'react'
import './Technology.css'

import bgTech from '../../assets/img/technology/background-technology-desktop.jpg'

const Technology = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgTech})`
    }, []);

    return (
        <div className='technology'>
            <h1>Technology</h1>
        </div>
    )
}

export default Technology