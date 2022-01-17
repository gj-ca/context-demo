import React, {useState} from 'react'

const NewCategoryForm = ({darkMode, setCategories, categories}) => {
    const [category, setCategory] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        setCategories([...categories, category])

    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{color: darkMode ? "white" : "black"}}> 
                <fieldset>
                    <label>Name</label>
                    <input value={category} onChange={e => setCategory(e.target.value)} />
                </fieldset>
                <button>Submit</button>
            </form>
        </>
    )
}

export default NewCategoryForm