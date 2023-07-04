import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import { register } from '../apiCalls/user.js'
import { UserContext } from '../context/UserContext.jsx';
import Header from '../components/Header.jsx';

import './Register.css'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

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
            name,
            email,
            password
        }

        const response = await register(data)
        if(response.status === 201) {
            setUser(response.data.user)
            Swal.fire({
                title: 'Welcome!',
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
            navigate('/')
        } else {
            alert(response.response.data.msg)
        }
    }

    return (
        <>

            <Header />

            <div className="register">
                
                <div className="register__title">
                    <h1>Create an account</h1>
                </div>
                
                <form className='register__form' onSubmit={handleSubmit}>
                    <div className='register__form_input'>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder='User name'
                            autoComplete='new-password'
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className='register__form_input'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='E-mail'
                            autoComplete='new-password'
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='register__form_input'>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Password'
                            autoComplete='new-password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className='register__form_input'>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder='Confirm Password'
                            autoComplete='new-password'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className='register__form_submit'>
                        <button type="submit">Sign up</button>
                    </div>
                </form>

                <div className='register__redirect'>
                    <p>Already have an account?</p>
                    <Link to='/user/login'>Sign in here</Link>
                </div>
            </div>

        </>
    )
}

export default Register