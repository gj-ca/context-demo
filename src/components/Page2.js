import React, {useContext} from 'react'
import Context from '../context.js'

const Page2 = () => {
    const {state} = useContext(Context)
    return (
        <div style={{color: state.darkMode? "white" : "black"}}>
            <h1>View by category</h1>
            {state.categories.map(e => (
                <p>{e}</p>
            ))}
        </div>
    )
}

export default Page2