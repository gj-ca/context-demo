import React from 'react'
import NewCategoryForm from './NewCategoryForm'

const Page3 = ({darkMode, setDarkMode, categories, setCategories}) => {
    return (
        <>
            <div style={{color: darkMode? "white" : "black"}}>
                <h1>Page3</h1>
                <p>lorem ipsum</p>
            </div>
            <NewCategoryForm darkMode={darkMode} categories={categories} setCategories={setCategories}/>
        </>
    )
}

export default Page3