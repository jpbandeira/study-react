import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sobre from '../../views/examples/Sobre'
import Home from '../../views/examples/Home'
import './Content.css'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
    <main className='content'>
        <Switch>            
            <Route path='/sobre/:param/:param2'>
                <Sobre/>
            </Route>
            <Route path='/sobre'>
                <Sobre/>
            </Route>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route>
        </Switch>
    </main>
)

export default Content;