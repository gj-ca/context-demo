import React from 'react'

const NewPostForm = ({darkMode, categories}) => {
    return (
        <>
            <form style={{color: darkMode ? "white" : "black"}}> 
                <fieldset>
                    <label>Title</label>
                    <input />
                </fieldset>
                <fieldset>
                    <label>Category</label>
                    <select>
                        {categories.map((category, index) => (
                            <option key={index} value="category">{category}</option>
                        ))}
                    </select>
                </fieldset>
                <button>Submit</button>
            </form>
        </>
    )
}

export default NewPostForm