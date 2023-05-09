import React,{useState} from 'react'
import noteContext from './noteContext'
// creating notestate data or fn which can be accessed within any component
const NoteState = (props) => {
const notes=[
      {
        "_id": "645392a0d28a3a8f3ac501981",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes1",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:24.923Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a2",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a3",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a4",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      }
    ]
    const [data, setData] = useState(notes);
// add notes
const addNotes=(title,desc,tag)=>{
const newNote = {
  "_id": `645392aad28aa8f3ac5019a4`,
  "user": "644902b72393000d24c33c9c",
  "title": title,
  "description": desc,
  "tag": tag,
  "timestamp": "2023-05-04T11:10:34.938Z",
  "__v": 0
}
setData(data.concat(newNote))

}

// edit note
const editNotes=(title,description,tag)=>{


}

// delete note
const deleteNotes=(id)=>{


}


      
    return (
        // default boilerplate of context api data provider
        <noteContext.Provider value={{data,setData,addNotes,editNotes,deleteNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
