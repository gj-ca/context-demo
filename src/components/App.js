import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const App = () => {
    const [darkMode, setDarkMode] = useState(true)
    const [categories, setCategories] = useState(["Tech", "Sports", "Animals"])

    return (
        <Router>
            <div style={{height: "100vh", backgroundColor: darkMode ? "black" : "white"}}>
                <nav>
                    <Link style={{color: darkMode? "white" : "black"}} to="/page1">Page 1</Link>
                    <Link style={{color: darkMode? "white" : "black"}} to="/page2">Page 2</Link>
                    <Link style={{color: darkMode? "white" : "black"}} to="/page3">Page 3</Link>
                </nav>
                <button onClick={() => setDarkMode(!darkMode)}>darkMode</button>
                <Route exact path="/page1" render={() => <Page1 categories={categories} darkMode={darkMode} setDarkMode={setDarkMode} /> } />
                <Route exact path="/page2" render={() => <Page2 categories={categories} darkMode={darkMode} setDarkMode={setDarkMode} /> } />
                <Route exact path="/page3" render={() => <Page3 categories={categories} darkMode={darkMode} setDarkMode={setDarkMode} setCategories={setCategories} /> } />
            </div>
        </Router>
    )
}

{/* <button>Mode</button> */}
export default App