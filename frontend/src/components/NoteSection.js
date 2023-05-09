
import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';


const NoteSection = () => {
    const output = useContext(noteContext);
    const { data } = output;
    return (

        <div className=" container row my-2">
            <h2>Your Notes</h2>
            {data.map((x)=>{
                return <NoteItem key={x._id} data={x} />
            })}
            

        </div>
    )
}

export default NoteSection
