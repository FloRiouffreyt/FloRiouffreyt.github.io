import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { UserContext } from '../context/UserContext.jsx'
import { logout, updatePassword } from '../apiCalls/user.js'
import Header from '../components/Header.jsx'
import LinkBack from '../components/LinkBack.jsx'

import './UpdatePassword.css'

const UpdatePassword = () => {

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

    const handleSubmit = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            Swal.fire({
                title: 'Password does not match!',
                position: 'center',
                width: 'auto',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    title: 'swal-text',
                    popup: 'swal-bg'
                }
            })
            return
        }
        const data = {
            password: oldPassword,
            newPassword: password
        }
        
        const response = await updatePassword(data)
        if(response.status === 200) {
            Swal.fire({
                title: 'Password updated!',
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
            logout()
            setUser({})
            navigate('/user/login')
        } else {
            Swal.fire({
                title: `${response.response.data.msg}`,
                position: 'center',
                width: 'auto',
                icon: 'warning',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    title: 'swal-text',
                    popup: 'swal-bg'
                }
            })
        }
    }

    return (
        <>

        <Header />

        <LinkBack link={"/user/profile"}/>

            <div className='updatePassword'>
                <h2 className='updatePassword__title'>Update Password</h2>
                <form className='updatePassword__form' onSubmit={handleSubmit}>
                    <div className='updatePassword__form_input'>
                        <input
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder='Current password'
                            onChange={e => setOldPassword(e.target.value)}
                            autoComplete='new-password'
                            />
                    </div>
                    <div className='updatePassword__form_input'>
                        <input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            placeholder='New password'
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className='updatePassword__form_input'>
                        <input
                            type="password"
                            name="confirmNewPassword"
                            id="confirmNewPassword"
                            placeholder='Confirm new password'
                            onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className='updatePassword__form_submit'>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdatePassword