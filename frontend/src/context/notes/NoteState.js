import React from 'react'
import noteContext from './noteContext'
// creating notestate data or fn which can be accessed within any component
const NoteState = (props) => {

    
    return (
        // default boilerplate of context api data provider
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
