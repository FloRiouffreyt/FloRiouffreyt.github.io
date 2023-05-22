import React, {useEffect, useState} from 'react'
import './Crew.css'

const Crew = () => {

    const tabs = document.querySelectorAll('.crew__content_slider_list-item')
    const [crew, setCrew] = useState();

    const getData = i => {
        fetch('data.json')
        .then(resp => {
            return resp.json()
        })
        .then(myData => {
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

    return (
        <div className='crew'>
            <div className='crew__grid'>
                <h1 className='crew__title'>
                    <span>02</span>meet your crew</h1>

                {crew && <img className='crew__img' src={crew.images.webp} alt="crew image"/>}

                <div className='crew__content'>
                    {crew && <h2 className='crew__content_role'>{crew.role}</h2>}
                    {crew && <h3 className='crew__content_name'>{crew.name}</h3>}
                    {crew && <p className='crew__content_text' id={crew.role.toLowerCase().replaceAll(' ', '_')}>{crew.bio}</p>}
                    <div className='crew__content_slider'>
                        <ul className='crew__content_slider_list'>
                            <li onClick={() => getData(0)} className='crew__content_slider_list-item crew__active'></li>
                            <li onClick={() => getData(1)} className='crew__content_slider_list-item'></li>
                            <li onClick={() => getData(2)} className='crew__content_slider_list-item'></li>
                            <li onClick={() => getData(3)} className='crew__content_slider_list-item'></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew