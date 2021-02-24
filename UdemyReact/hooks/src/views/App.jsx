import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import DataContext, { data } from '../data/DataContext'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => {
const [stateContext, setStateContext] = useState(data); 

    return (
        <DataContext.Provider value={{stateContext, setStateContext}}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App