import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'


const NoteItem = (props) => {

    const output=useContext(noteContext);
    const{editNotes,deleteNotes}= output; 
    // getting props of notes and displaying in component in cards
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="card mx-2 my-2" >
                <h4 className='mx-2 my-2'>{props.data.title}</h4>
                <p className='mx-4 my-2'>{props.data.description}</p>
                <br />
                <p className='mx-4 my-2'>Tag: {props.data.tag}</p>
                <div id="btnGrp">
                    <button className='uiBtn my-2 mx-2'> <i className="fa-solid fa-pen-to-square"></i></button>
                    <button className='uiBtn my-2'> <i className="fa-solid fa-trash" onClick={(x)=>deleteNotes(props.data._id)}></i></button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
