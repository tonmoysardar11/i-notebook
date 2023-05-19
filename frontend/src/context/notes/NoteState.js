import React, { useState } from 'react'
import noteContext from './noteContext'
// creating notestate data or fn which can be accessed within any component
const NoteState = (props) => {
  // localhost backend api
  const host = "http://localhost:5000";




  const [data, setData] = useState([]);
  // get notes from api
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "user-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OTAyYjcyMzkzMDAwZDI0YzMzYzljIn0sImlhdCI6MTY4MjUwNjQzN30.NycK19dUFJMNcjO6CpYjTlZMjCu-kBjcM-a-ySrVPd4'
      }
    });
    // the response json contains a obj with the arrays thats why we are taking .notes to get the arrays directly
    const json = (await response.json()).notes;
    // displaying the notes we recived from api via setData usestate
    setData(json)

  }

  // add notes
  var newNote = {};
  const addNotes = async (title, description, tag) => {
    // adding a default note just for now
    newNote = {
      //taking title,description,tag from add note function which is used in home page via context api

      "title": title,
      "description": description,
      "tag": tag,
    }
    // adding new note to backend
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "user-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OTAyYjcyMzkzMDAwZDI0YzMzYzljIn0sImlhdCI6MTY4MjUwNjQzN30.NycK19dUFJMNcjO6CpYjTlZMjCu-kBjcM-a-ySrVPd4'
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = (await response.json());
    console.log(json)
    // merging the current datalist with the recent data we are adding using array concat method which returns a new array and dispalying it in frontend
    setData(data.concat(newNote))

  }

  // edit note
  const editNotes = async (id, title, description, tag) => {
    // fetching the editnote api,taking title,description,tag from frontend,making it a json file by JSON>stringify method then sending it by body of api
    const response = await fetch(`${host}/api/notes/editnote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "user-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OTAyYjcyMzkzMDAwZDI0YzMzYzljIn0sImlhdCI6MTY4MjUwNjQzN30.NycK19dUFJMNcjO6CpYjTlZMjCu-kBjcM-a-ySrVPd4'
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = (await response.json());
    console.log(json)
    // checking if the selected note is being edited or not using for loop and then updating the displayed note in frontend
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  // delete note
  // deleting using array filter function which is taking id while we clicking delete button,if the deleting id matches the current note id then rest all the notes will be assigned to newNote,then setting setData to newNote to update the datalist
  const deleteNotes = async (id) => {
    newNote = data.filter((x) => { return x._id !== id })
    setData(newNote);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "user-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OTAyYjcyMzkzMDAwZDI0YzMzYzljIn0sImlhdCI6MTY4MjUwNjQzN30.NycK19dUFJMNcjO6CpYjTlZMjCu-kBjcM-a-ySrVPd4'
      }
    });

    const json = (await response.json());
    console.log(json)

  }

  return (
    // default boilerplate of context api data provider,we can send all the data or func we need
    <noteContext.Provider value={{ data, setData, addNotes, editNotes, deleteNotes, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState
