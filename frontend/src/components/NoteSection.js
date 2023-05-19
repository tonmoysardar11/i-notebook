
import React, { useState, useContext, useEffect, useRef } from 'react'
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

    const [note, setNote] = useState({ etitle: '', edescription: '', etag: '' });

    const ref = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ ...note, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });

    }

    const change = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

    }




    return (
        <>
            {/* modal */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="cardModal">
                            <span className="title">Edit Note</span>
                            <form className="form">
                                <div className="group">
                                    <input type="text" id="etitle" name='etitle' value={note.etitle} onChange={change} />
                                    <label htmlFor="etitle">Title</label>
                                </div>
                                <div className="group">
                                    <input type="text" id="etag" name='etag' value={note.etag} onChange={change} />
                                    <label htmlFor="etag">Tag</label>
                                </div>
                                <div className="group">
                                    <textarea type="text" rows='4' id="edescription" name="edescription" value={note.edescription} onChange={change} />
                                    <label htmlFor="edesc">Desciption</label>
                                </div>
                                <button className="logo2" type="submit" onClick={onSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




            {/*iterating the data by using array map method with unique key of data id*/}
            <div className=" container row my-2">
                <h2>Your Notes</h2>
                {data.map((x) => {
                    return <NoteItem key={x._id} updateNote={updateNote} data={x} />
                })}


            </div>
        </>
    )
}

export default NoteSection
