import React from 'react'
import NoteSection from './NoteSection'





const Home = () => {




  return (
    <div className='container my-3'>
      <h2>Add Note</h2>
      <br />
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="form-label">Title</label>
          <div>
            <input type="text" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="form-label">Tag</label>
          <div>
            <input type="text" className="form-control" id="inputPassword3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="form-label">Desciption</label>
          <div>
            <textarea type="text" className="form-control" rows='4' id="inputPassword3" />
          </div>
        </div>
        <button type="submit" className="logo2">Add Note</button>
      </form>
      <br />
      
      <NoteSection />
    </div >
  )
}

export default Home
