
import React, { useState, useContext, useEffect, useRef } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';


const NoteSection = () => {
    // calling notecontext via contextapi
    const output = useContext(noteContext);
    // destructuring and taking req items from note context
    const { data, getNotes,editNotes,showAlert } = output;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);

    const [note, setNote] = useState({id:"", etitle: '', edescription: '', etag: '' });

    const ref = useRef(null);
    const closeref = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ ...note,id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });

    }

    const change = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        closeref.current.click();
        editNotes(note.id,note.etitle,note.edescription,note.etag)
        showAlert('success','Success!! Note edited Successfully')

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
                                    <input type="text" id="etitle" name='etitle' value={note.etitle} onChange={change} minLength={3} required/>
                                    <label htmlFor="etitle">Title</label>
                                </div>
                                <div className="group">
                                    <input type="text" id="etag" name='etag' value={note.etag} onChange={change} required/>
                                    <label htmlFor="etag">Tag</label>
                                </div>
                                <div className="group">
                                    <textarea type="text" rows='4' id="edescription" name="edescription" value={note.edescription} onChange={change} minLength={5} required/>
                                    <label htmlFor="edesc">Desciption</label>
                                </div>
                            </form>
                            <button disabled={note.etitle.length<3||note.edescription.length<5} className="btn btn-dark my-2 mx-auro" type="submit" onClick={onSubmit}>Submit</button>
                                <button className="btn btn-danger" ref={closeref}data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>




            {/*iterating the data by using array map method with unique key of data id*/}
            <div className=" container row my-2">
                <h2>Your Notes</h2>
                <div className="container text-light">
                    {data.length===0 && "Nothing to Display, Try adding a note"}
                </div>
                {data.map((x) => {
                    return <NoteItem key={x._id} updateNote={updateNote} data={x} />
                })}


            </div>
        </>
    )
}

export default NoteSection
