import React, {useContext} from 'react'
import NewPostForm from './NewPostForm'
import Context from '../context.js'


const Page1 = () => {
    // Consuming the context
    const {state, dispatch} = useContext(Context)
    return (
        <div >
            <h1 style={{color: state.darkMode? "white" : "black"}}>New Post</h1>
            <NewPostForm />
        </div>
    )
}

export default Page1