import React, {useState, useContext} from 'react'
import Context from '../context.js'

const NewCategoryForm = () => {
    const {state, dispatch} = useContext(Context)
    const [category, setCategory] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: "addCategory" , value: category })
    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{color: state.darkMode ? "white" : "black"}}> 
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