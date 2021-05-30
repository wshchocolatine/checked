import ReactDOM from 'react-dom'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//Import Components
import Login from './login/app'
import Register from './register/app'
import About from './app/about/app'
import Dashboard from './app/dashboard/app'
import New from './app/new/app'

function App() {
    return(
        <Router>
            <Switch>
                <Route path="/login"> <Login /> </Route>
                <Route path="/register"> <Register /> </Route>
                <Route path="/about"> <About /> </Route>
                <Route path="/dashboard"> <Dashboard /> </Route>
                <Route path="/new"> <New /> </Route>
            </Switch>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))