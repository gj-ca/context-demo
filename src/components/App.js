import React, {useContext, useReducer, useState} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Context from '../context.js'
import stateReducer from '../reducer.js'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const App = () => {
    const [state, dispatch] = useReducer(stateReducer, {
        darkMode: true,
        categories: ["Tech", "Sports", "Animals"]
    })
    return (
        // Providing the context
        <Context.Provider value={{state, dispatch}}>
            <Router>
                <div style={{height: "100vh", backgroundColor: state.darkMode ? "black" : "white"}}>
                    <nav>
                        <Link style={{color: state.darkMode? "white" : "black"}} to="/page1">Page 1</Link>
                        <Link style={{color: state.darkMode? "white" : "black"}} to="/page2">Page 2</Link>
                        <Link style={{color: state.darkMode? "white" : "black"}} to="/page3">Page 3</Link>
                    </nav>
                    <button onClick={() => dispatch({type: "setDarkmode", value: !state.darkMode})}>darkMode</button>
                    <Route 
                        exact path="/page1" 
                        render={() => <Page1 /> } 
                    />
                    <Route exact path="/page2" render={() => <Page2 /> } />
                    <Route exact path="/page3" render={() => <Page3 /> } />
                </div>
            </Router>
        </Context.Provider>

    )
}

export default App