import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { login } from '../apiCalls/user.js'
import { UserContext } from '../context/UserContext.jsx'
import Header from '../components/Header.jsx'

import './Login.css'

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

    const handleSubmit = async e => {
        e.preventDefault()
        const data = {email, password}
        const response = await login(data)
        if (response.status === 200) {
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
            setUser(response.data.user)
            navigate('/')
        } else {
            alert(response.response.data.msg)
        }
    }

    return (
        <>

            <Header />

            <div className="login">
                
                <div className="login__title">
                    <h1>Sign in</h1>
                </div>

                <form className='login__form' onSubmit={handleSubmit}>
                    <div className='login__form_input'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='E-mail'
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='login__form_input'>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className='login__form_submit'>
                        <button type="submit">Sign in</button>
                    </div>
                    
                </form>

                <div className='login__redirect'>
                    <p>Don't have an account?</p>
                    <Link to='/user/register'>Sign up here</Link>
                </div>
            </div>

        </>
    )
}

export default Login