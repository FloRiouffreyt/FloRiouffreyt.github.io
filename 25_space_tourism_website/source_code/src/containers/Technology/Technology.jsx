import React, {useEffect} from 'react'
import './Technology.css'

import bgTech from '../../assets/img/technology/background-technology-desktop.jpg'
import techImg from '../../assets/img/technology/image-launch-vehicle-portrait.jpg'

const Technology = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgTech})`
    }, []);

    return (
        <div className='technology'>
            <div className='technology__grid'>
                <h1 className='technology__title'>
                    <span>03</span>space launch 101</h1>
                <div className='technology__slider'>
                    <div className='technology__slider_btn btn-active'>1</div>
                    <div className='technology__slider_btn'>2</div>
                    <div className='technology__slider_btn'>3</div>
                </div>
                <div className='technology__content'>
                    <h2 className='technology__content_title'>the terminology...</h2>
                    <h3 className='technology__content_name'>launch vehicle</h3>
                    <p className='technology__content_text'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aspernatur explicabo commodi ad sint magni unde nostrum
                        incidunt obcaecati quas sed laborum accusamus omnis cumque atque ab itaque,
                        asperiores suscipit deserunt qui doloribus maxime dolores quisquam maiores modi.
                        Fugiat, nam provident, eos tenetur facilis, deleniti culpa nobis nisi dolorum
                        reiciendis odit.</p>
                </div>
                <img className='technology__img' src={techImg} alt=""/>
            </div>
        </div>
    )
}

export default Technology