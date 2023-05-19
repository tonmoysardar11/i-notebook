import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const NoteItem = (props) => {


    const output = useContext(noteContext);
    const { deleteNotes } = output;




    // getting props of notes and displaying in component in cards
    return (
        <>
            {/* <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="cardModal">
                            <span className="title">Edit Note</span>
                            <form className="form">
                                <div className="group">
                                <input type="text" id="etitle" name='etitle' value={note.title} onChange={change} />
                                    <label htmlFor="etitle">Title</label>
                                </div>
                                <div className="group">
                                <input type="text" id="etag" name='etag' value={note.tag} onChange={change} />
                                    <label htmlFor="etag">Tag</label>
                                </div>
                                <div className="group">
                                <textarea type="text" rows='4' id="edesc" name="edesc" value={note.desc} onChange={change} />
                                <label htmlFor="edesc">Desciption</label>
                                </div>
                                <button type="submit" onClick={onSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className="card mx-2 my-2" >
                    <h4 className='mx-2 my-2'>{props.data.title}</h4>
                    <p className='mx-4 my-2'>{props.data.description}</p>
                    <br />
                    <p className='mx-4 my-2'>Tag: {props.data.tag}</p>
                    <div id="btnGrp">
                        <button className='uiBtn my-2 mx-2 edit'> <i className="fa-solid fa-pen-to-square" ></i></button>
                        <button className='uiBtn my-2 delete'> <i className="fa-solid fa-trash" onClick={(x) => deleteNotes(props.data._id)}></i></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoteItem
