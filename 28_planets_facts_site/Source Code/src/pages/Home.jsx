import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({data}) => {
    return (
        <div>
            <ul className='home__nav_list'>
                {data && data.length > 0 && data.map((planet, i) => 
                    <li key={i} >
                        <Link to={planet.name.toString().toLowerCase()}>
                            <div className='img_wrapper'>
                                <img src={planet.images.planet} alt={planet.name} />
                            </div>
                            <p>{planet.name}</p>
                        </Link>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

Home.propTypes = {
    data: PropTypes.array.isRequired
}

export default Home