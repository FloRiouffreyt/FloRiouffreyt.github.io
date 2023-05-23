import React, {useEffect, useState} from 'react'
import './Technology.css'

const Technology = () => {

    const tabs = document.querySelectorAll('.technology__slider_btn')
    const [tech, setTech] = useState();
    const [img, setImg] = useState();

    const getData = i => {
        fetch('data.json')
        .then(resp => {
            return resp.json()
        })
        .then(myData => {
            setTech(myData.technology[i])
            if (window.innerWidth > 1430) {
                setImg(myData.technology[i].images.portrait)
            } else {
                setImg(myData.technology[i].images.landscape)
            }
        })
    }

    useEffect(() => {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].classList.contains('technology__active')) {
                        tabs[i].classList.remove('technology__active')
                    }
                }
            tab.classList.add('technology__active')
            })
        })
    }, [tabs]);

    function setRootClass() {
        document.querySelector('#root').className = ''
        document.querySelector('#root').classList.add('root_technology')
    }

    useEffect(() => {
        setRootClass()
        getData(0)
    }, []);

    window.addEventListener('resize', () => {
        if (tech && window.innerWidth > 1430) {
            setImg(tech.images.portrait)
        } else if (tech && window.innerWidth <= 1430) {
            setImg(tech.images.landscape)
        }
    })

    return (
        <div className='technology'>
            <div className='technology__grid'>
                <h1 className='technology__title'>
                    <span>03</span>space launch 101</h1>
                <div className='technology__slider'>
                    <div onClick={() => getData(0)} className='technology__slider_btn technology__active'>1</div>
                    <div onClick={() => getData(1)} className='technology__slider_btn'>2</div>
                    <div onClick={() => getData(2)} className='technology__slider_btn'>3</div>
                </div>
                <div className='technology__content'>
                    <h2 className='technology__content_title'>the terminology...</h2>
                    {tech && <h3 className='technology__content_name'>{tech.name}</h3>}
                    {tech && <p className='technology__content_text'>{tech.description}</p>}
                </div>
                {tech && <img className='technology__img' src={img} alt="Technology image"/>}
            </div>
        </div>
    )
}

export default Technology