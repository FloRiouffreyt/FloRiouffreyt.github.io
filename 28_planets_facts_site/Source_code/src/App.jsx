import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Nav, Footer} from "./components"
import {Home, Planet} from "./pages"

import './App.css'

const App = () => {

    const [planets, setPlanets] = useState([]);

    const getData = () => {
        fetch('data.json')
        .then(resp => {
            return resp.json()
        }).then(data => {
            setPlanets(data)
        })
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <BrowserRouter basename='/28_planets_facts_site'>
            <Nav data={planets}/>
            <Routes>
                <Route path="/" element={<Home data={planets} />}/>
                {planets && planets.length>0 && planets.map((planet, i) =>
                    <Route 
                        key={i}
                        path={'/' + planet.name.toString().toLowerCase()}
                        element={<Planet
                                    name={planet.name.toString().toLowerCase()}
                                    images={planet.images}
                                    overview={planet.overview}
                                    structure={planet.structure}
                                    geology={planet.geology}
                                    rotation={planet.rotation}
                                    revolution={planet.revolution}
                                    radius={planet.radius}
                                    temperature={planet.temperature}
                                    color={planet.color}
                                />}    
                    />
                )}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App