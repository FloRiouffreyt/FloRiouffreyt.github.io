import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Planet = ({name, images, overview, structure, geology, rotation, revolution, radius, temperature, color}) => {
    
    const [view, setView] = useState('overview');

    const resetTab = () => {
        const viewBtns = document.querySelectorAll('.planet__view_btn')
        for (let i = 0; i < viewBtns.length; i++) {
            if (viewBtns[i].classList.contains('active')) {
                viewBtns[i].classList.remove('active')
            }
        }
        viewBtns[0].classList.add('active')
        setView('overview')
    }

    const handleTab = () => {
        const viewBtns = document.querySelectorAll('.planet__view_btn')
        viewBtns.forEach(viewBtn => {
            viewBtn.addEventListener('click', e => {
                for (let i = 0; i < viewBtns.length; i++) {
                    if (viewBtns[i].classList.contains('active')) {
                        viewBtns[i].classList.remove('active')
                    }
                }
            viewBtn.classList.add('active')
            setView(e.target.id)
            })
        })
    }

    useEffect(() => {
        resetTab()
        handleTab()
        document.documentElement.style.setProperty('--color-bg-view', color)
    });

    return (
        <>
        <div className='planet__main_grid'>
            <div className='planet__main_grid-img'>
            {
                view === "overview" 
                ? <img src={'../.' + images.planet} alt={name} />
                : view === "structure"
                ? <img src={'../.' + images.internal} alt={name} />
                : view === "geology"
                &&  <>
                    <img src={'../.' + images.planet} alt={name} className='planet__img'/>
                    <img src={'../.' + images.geology} alt={name} className='planet__img-geology'/>
                </>
            }
            </div>
            <div className='planet__main_grid-info'>
                <h1>{name}</h1>
                <div className='planet__main_info-content'>
                    {
                    view === "overview"
                    ? <p className='planet_content'>{overview.content}</p>
                    : view === "structure"
                    ? <p className='planet_content'>{structure.content}</p>
                    : view === "geology"
                    && <p className='planet_content'>{geology.content}</p>
                    }
                    {
                    view === "overview"
                    ? <p className='content_source'>Source : <Link
                        to={overview.source}
                        rel='noopener norefferer nofollow'
                        target='_blank'> Wikipedia
                        </Link>
                    </p>
                    : view === "structure"
                    ? <p className='content_source'>Source : <Link
                        to={structure.source}
                        rel='noopener norefferer nofollow'
                        target='_blank'> Wikipedia
                        </Link>
                    </p>
                    : view === "geology"
                    && <p className='content_source'>Source : <Link
                        to={geology.source}
                        rel='noopener norefferer nofollow'
                        target='_blank'> Wikipedia
                        </Link>
                    </p>
                    }
                </div>
                <div className='planet__view'>
                    <ul className='planet__view_list'>
                        <li className='planet__view_btn active' id='overview'>
                            <span>01</span> overview
                        </li>
                        <li className='planet__view_btn' id='structure'>
                            <span>02</span> internal structure
                        </li>
                        <li className='planet__view_btn' id='geology'>
                            <span>03</span> surface geology
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='planet__details'>
            <div className='planet__details_card'>
                <p className='planet__details_card_name'>rotation time</p>
                <p className='planet__details_card_value'>{rotation}</p>
            </div>
            <div className='planet__details_card'>
                <p className='planet__details_card_name'>revolution time</p>
                <p className='planet__details_card_value'>{revolution}</p>
            </div>
            <div className='planet__details_card'>
                <p className='planet__details_card_name'>radius</p>
                <p className='planet__details_card_value'>{radius}</p>
            </div>
            <div className='planet__details_card'>
                <p className='planet__details_card_name'>average temp.</p>
                <p className='planet__details_card_value'>{temperature}</p>
            </div>
        </div>
        </>
    )
}

Planet.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.object.isRequired,
    overview: PropTypes.object.isRequired,
    structure: PropTypes.object.isRequired,
    geology: PropTypes.object.isRequired,
    rotation: PropTypes.string.isRequired,
    revolution: PropTypes.string.isRequired,
    radius: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Planet