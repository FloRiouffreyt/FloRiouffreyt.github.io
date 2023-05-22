import React, {useEffect, useState} from 'react'
import './Crew.css'

const Crew = () => {

    const [crew, setCrew] = useState();
    const [touchPosition, setTouchPosition] = useState(null);
    const [slide, setSlide] = useState(0);

    const tabs = document.querySelectorAll('.crew__content_slider_list-item')

    const getData = i => {
        fetch('data.json')
        .then(resp => {
            return resp.json()
        }).then(myData => {
            setCrew(myData.crew[i])
        })
    }

    useEffect(() => {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].classList.contains('crew__active')) {
                        tabs[i].classList.remove('crew__active')
                    }
                }
                tab.classList.add('crew__active')
                setSlide(tab.value)
            })
        })
    }, [tabs]);

    function setRootClass() {
        document.querySelector('#root').className = ''
        document.querySelector('#root').classList.add('root_crew')
    }

    useEffect(() => {
        setRootClass()
        getData(0)
    }, []);

    const handleTouchStart = e => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchEnd = e => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.changedTouches[0].clientX
        const diff = touchDown - currentTouch

        diff > 5 && nextSlide()
        diff < -5 && prevSlide()
    }

    const nextSlide = () => {
        if (slide >= 0 && slide < 3) {
            setSlide(slide => slide + 1)
        } else {
            return
        }
    }
    
    const prevSlide = () => {
        if (slide > 0 && slide <= 3) {
            setSlide(slide => slide - 1)
        } else {
            return
        }
    }

    useEffect(() => {
        getData(slide)
        const tabs = document.querySelectorAll('.crew__content_slider_list-item')
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('crew__active')) {
                tabs[i].classList.remove('crew__active')
            }
        }
        tabs[slide].classList.add('crew__active')
    }, [slide]);

    return (
        <div className='crew'>
            <div className='crew__grid'>
                <h1 className='crew__title'>
                    <span>02</span>meet your crew</h1>

                {crew && <img
                    className='crew__img'
                    src={crew.images.webp}
                    alt="crew image"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    />}

                <div className='crew__content'>
                    {crew && <h2 className='crew__content_role'>{crew.role}</h2>}
                    {crew && <h3 className='crew__content_name'>{crew.name}</h3>}
                    {crew && <p
                        className='crew__content_text'
                        id={crew
                        .role
                        .toLowerCase()
                        .replaceAll(' ', '_')}>{crew.bio}</p>}
                    <div className='crew__content_slider'>
                        <ul className='crew__content_slider_list'>
                            <li onClick={() => getData(0)} value={0} className='crew__content_slider_list-item crew__active'></li>
                            <li onClick={() => getData(1)} value={1} className='crew__content_slider_list-item'></li>
                            <li onClick={() => getData(2)} value={2} className='crew__content_slider_list-item'></li>
                            <li onClick={() => getData(3)} value={3} className='crew__content_slider_list-item'></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew