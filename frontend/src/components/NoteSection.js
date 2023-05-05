
import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';


const NoteSection = () => {
    const output = useContext(noteContext);
    const { data, setdata } = output;
    return (
        <div className="row my-2">
            <h2>Your Notes</h2>
            {data.map((x)=>{
                return <NoteItem data={x} />
            })}
            

        </div>
    )
}

export default NoteSection
