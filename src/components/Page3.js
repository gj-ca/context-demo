import React, {useContext} from 'react'
import NewCategoryForm from './NewCategoryForm'
import Context from '../context.js'

const Page3 = () => {
    const {state, dispatch} = useContext(Context)
    return (
        <>
            <div style={{color: state.darkMode? "white" : "black"}}>
                <h1>Page3</h1>
                <p>New Category</p>
            </div>
            <NewCategoryForm />
        </>
    )
}

export default Page3