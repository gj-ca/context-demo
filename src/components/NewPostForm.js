import React, {useContext} from 'react'
import Context from '../context.js'

const NewPostForm = () => {
    const {state, dispatch} = useContext(Context)
    return (
        <>
            <form style={{color: state.darkMode ? "white" : "black"}}> 
                <fieldset>
                    <label>Title</label>
                    <input />
                </fieldset>
                <fieldset>
                    <label>Category</label>
                    <select>
                        {state.categories.map((category, index) => (
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