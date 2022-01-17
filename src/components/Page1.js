import React from 'react'
import NewPostForm from './NewPostForm'

const Page1 = ({darkMode, setDarkMode, categories}) => {
    return (
        <div >
            <h1 style={{color: darkMode? "white" : "black"}}>New Post</h1>
            <NewPostForm categories={categories} darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}

export default Page1