import React, { useState } from 'react'
import noteContext from './noteContext'
// creating notestate data or fn which can be accessed within any component
const NoteState = (props) => {

    const value = {
        "name": "Tonmoy",
        "game": "FIFA"
    }

    const [data, setData] = useState(value);

    const update = () => {
        setTimeout(()=>{
            setData({
                "name": "Falcon",
                "game": "CoC"
            })
        },2000)
        
    }
    return (
        // default boilerplate of context api data provider
        <noteContext.Provider value={{data, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
