import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nav = ({data}) => {

    return (
        <header>
            <nav>
                <div className="header__nav_title">
                    <Link to="/">
                        the planets
                    </Link>
                </div>
                <div className='header__nav'>
                    <ul className="header__nav_list">
                        {data && data.length>0 && data.map((planet, i) => 
                            <li key={i}>
                                <Link to={planet.name.toString().toLowerCase()}>
                                    {planet.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

Nav.propTypes = {
    data: PropTypes.array.isRequired
}

export default Nav