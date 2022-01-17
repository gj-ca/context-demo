import React from 'react'

const Page2 = ({darkMode, setDarkMode, categories}) => {
    return (
        <div style={{color: darkMode? "white" : "black"}}>
            <h1>View by category</h1>
            {categories.map(e => (
                <p>{e}</p>
            ))}
        </div>
    )
}

export default Page2