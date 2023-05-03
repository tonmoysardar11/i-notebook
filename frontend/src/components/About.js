import React from 'react'
// imported usecontext and notetext to use the notestate data
import { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext'

const About = () => {
    // taking the value from notestate by notecontext
    const x = useContext(noteContext);

    useEffect(() => {
        x.update();
        // eslint-disable-next-line
    }, []);



    return (
        <div>
            <h1>I am {x.data.name} & I love to play {x.data.game}</h1>
        </div>
    )
}

export default About


