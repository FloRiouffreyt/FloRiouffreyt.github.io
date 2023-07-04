import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

import {UserContext} from '../context/UserContext'
import { logout } from '../apiCalls/user.js'

import './Header.css'
import {RxAvatar, RxExit, RxDotFilled } from 'react-icons/rx'

const HeaderOptions = () => {

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        const response = await logout()
        if (response.status === 200) {
            Swal.fire({
                title: 'Good bye!',
                position: 'bottom',
                toast: true,
                width: 'auto',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    title: 'swal-text',
                    popup: 'swal-bg'
                }
            })
            setUser({})
            navigate('/user/login')
        } else {
            alert(response.response.data.msg)
        }
    }

    return (
        <>
            {user._id && (
                <div className='header__userInfo'>
                    <p><RxDotFilled size={'1.5rem'} color='limegreen'/> Connected as {user.name}</p>
                    <Link to='/user/profile'>See profile <RxAvatar size={'1rem'}/></Link>
                    <button onClick={handleLogout}>Logout <RxExit size={'1rem'} /></button>
                </div>
            )
            }
        </>
    )
}

export default HeaderOptions