import React from 'react'
import { Link } from 'react-router-dom'

import './LinkBack.css'
import { RxReset } from 'react-icons/rx'

const LinkBack = ({link}) => {
    return (
        <>
            <Link to={link} className='linkBack'><RxReset size={16}/>Back</Link>
        </>
    )
}

export default LinkBack