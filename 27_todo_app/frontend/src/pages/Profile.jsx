import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { deleteUser, logout } from '../apiCalls/user.js'
import { UserContext } from '../context/UserContext.jsx'
import Header from '../components/Header.jsx'
import LinkBack from '../components/LinkBack.jsx'

import './Profile.css'
import { RxUpdate, RxLockClosed, RxExit, RxTrash } from 'react-icons/rx'

const Profile = () => {

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

    const handleDeleteAccount = async () => {
        if (window.confirm('This action will permanently delete your account. Are you sure?')) {
            const response = await deleteUser()
            if (response.status === 200) {
                Swal.fire({
                    title: 'User deleted!',
                    position: 'bottom',
                    toast: true,
                    width: 'auto',
                    icon: 'success',
                    iconColor: 'crimson',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        title: 'swal-text',
                        popup: 'swal-bg'
                    }
                })
                setUser({})
                navigate('/')
            } else {
                alert(response.response.data.msg)
            }
        }
    }

    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    })

    const date = formatter.format(Date.parse(user.createdAt))

    return (
        <>

            <Header />

            <LinkBack link={"/"} />

            <div className='profile'>
                <h2 className='profile__title'>Welcome {user.name}</h2>
                <div className='profile__infos'>
                    <h2>My infos:</h2>
                    <h3 className='profile__user'>Name : {user.name}</h3>
                    <h3 className='profile__email'>Email : {user.email}</h3>
                    <h3 className='profile__email'>Account created : {date}</h3>
                </div>
                <div className='profile__actions'>
                    <button onClick={() => navigate('/user/update')}>Update profile <RxUpdate /></button>
                    <button onClick={() => navigate('/user/updatePassword')}>Update password <RxLockClosed /></button>
                    <button onClick={handleLogout}>Logout <RxExit /></button>
                    <button onClick={handleDeleteAccount}>Delete account <RxTrash/></button>
                </div>
            </div>
        </>
    )
}

export default Profile