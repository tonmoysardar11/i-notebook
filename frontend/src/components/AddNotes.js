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
  }

  return (
    // add note form
    <div>
      <div className='container my-3'>
        <h2>Add Note</h2>
        <br />
        <form>
          <div className="row mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <div>
              <input type="text" className="form-control" id="title" name='title' onChange={change} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <div>
              <input type="text" className="form-control" id="tag" name='tag' onChange={change} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="desc" className="form-label">Desciption</label>
            <div>
              <textarea type="text" className="form-control" rows='4' id="desc" name="desc" onChange={change} />
            </div>
          </div>
          <button type="submit" className="logo2" onClick={onSubmit}>Add Note</button>
        </form>

      </div >
    </div>
  )
}

export default AddNotes
