
import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';


const NoteSection = () => {
    // calling notecontext via contextapi
    const output = useContext(noteContext);
    // destructuring and taking req items from note context
    const { data, getNotes } = output;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);
    return (
        // iterating the data by using array map method with unique key of data id
        <div className=" container row my-2">
            <h2>Your Notes</h2>
            {data.map((x) => {
                return <NoteItem key={x._id} data={x} />
            })}


        </div>
    )
}

export default NoteSection
