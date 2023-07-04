import React, { useContext, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom'
import {Home, Login, Register, Profile, LoggedInHome, UpdateProfile, UpdatePassword} from './pages/index.js'
import { ProtectedRoutes, UnprotectedRoutes } from './components/index.js'
import { getUser } from './apiCalls/user.js';
import { UserContext } from './context/UserContext.jsx';

import './App.css';

function App() {

    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        const fetchData = async () => {
        const res = await getUser()
            if (res.status === 200) {
            setUser(res.data.user)
            }
        }
        fetchData()
    }, []);
    
    return (
        <div className="App container">

            <Routes>
                <Route path='/' element={user._id ? <LoggedInHome /> : <Home />}/>
                <Route path='/user/register' element={
                    <UnprotectedRoutes LoggedIn={user._id ? true : false}>
                        <Register />
                    </UnprotectedRoutes>
                    }/>
                <Route path='/user/login' element={
                    <UnprotectedRoutes LoggedIn={user._id ? true : false}>
                        <Login />
                    </UnprotectedRoutes>
                    }/>
                <Route path='/user/profile' element={
                    <ProtectedRoutes LoggedIn={user._id ? true : false}>
                        <Profile />
                    </ProtectedRoutes>
                    }/>
                <Route path='/user/update' element={
                    <ProtectedRoutes LoggedIn={user._id ? true : false}>
                        <UpdateProfile />
                    </ProtectedRoutes>
                    }/>
                <Route path='/user/updatePassword' element={
                    <ProtectedRoutes LoggedIn={user._id ? true : false}>
                        <UpdatePassword />
                    </ProtectedRoutes>
                    }/>
            </Routes>

        </div>
    );
}

export default App;