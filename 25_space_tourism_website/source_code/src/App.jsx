import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Crew, Destination, Header, Home, Technology} from './containers'

import './App.css'

const App = () => {

    return (
        <BrowserRouter basename='/25_space_tourism_website'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/destination" element={<Destination />}/>
                <Route path="/crew" element={<Crew />}/>
                <Route path="/technology" element={<Technology />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App