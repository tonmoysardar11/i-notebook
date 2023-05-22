import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNotes = () => {
  const [note, setNote] = useState({ title: '', desc: '', tag: '' });
  // calling notecontext via context api
  const output = useContext(noteContext);
  // destructuring req items from the notcontext
  const { addNotes } = output;
  // func to change & update values of field title description tag
  const change = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addNotes(note.title, note.desc, note.tag);
    setNote({ title: '', desc: '', tag: '' });
  }

  return (
    // add note form
    <div>

      
      <div className='container my-3'>
        <h2>Add Note</h2>
        <br />
        <form action='submit'>
          <div className="row mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <div>
              <input type="text" className="form-control" id="title" value={note.title} name='title' onChange={change} minLength={3} required/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <div>
              <input type="text" className="form-control" id="tag" value={note.tag} name='tag' onChange={change} required/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="desc" className="form-label">Desciption</label>
            <div>
              <textarea type="text" className="form-control" rows='4' id="desc" name="desc" value={note.desc} onChange={change} minLength={5} required/>
            </div>
          </div>
          <button disabled={note.title.length<3 ||note.desc.length<5} type="submit" className="logo2" onClick={onSubmit}>Add Note</button>
        </form>

      </div >
    </div>
  )
}

export default AddNotes
