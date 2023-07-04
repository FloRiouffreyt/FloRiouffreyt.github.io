import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { UserContext } from '../context/UserContext.jsx'
import { updateUser } from '../apiCalls/user.js'
import Header from '../components/Header.jsx'
import LinkBack from '../components/LinkBack.jsx'

import './UpdateProfile.css'

const UpdateProfile = () => {

    const {user, setUser} = useContext(UserContext)
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        
        const data = {
            name,
            email
        }

        const response = await updateUser(data)
        if(response.status === 200) {
            setUser(response.data.user)
            Swal.fire({
                title: 'User name updated!',
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
            navigate('/user/profile')
        } else {
            alert(response.response.data.msg)
        }
    }

    return (
        <>

        <Header />

        <LinkBack link={"/user/profile"}/>

            <div className='updateProfile'>
                <h2 className='updateProfile__title'>Update Profile</h2>
                <form className='updateProfile__form' onSubmit={handleSubmit}>
                    <div className='updateProfile__form_input'>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder='User name'
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className='updateProfile__form_submit'>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateProfile