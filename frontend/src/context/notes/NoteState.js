import React,{useState} from 'react'
import noteContext from './noteContext'
// creating notestate data or fn which can be accessed within any component
const NoteState = (props) => {
const host="http://localhost:5000";



const notes=[];
    const [data, setData] = useState(notes);
// add notes

var newNote = {
  //taking title,description,tag from add note function which is used in home page via context api
  "_id": `645392aad28aa8f3ac5019a4`,
  "user": "644902b72393000d24c33c9c",
  "title": '', 
  "description": '',
  "tag": '',
  "timestamp": "2023-05-04T11:10:34.938Z",
  "__v": 0
}
const addNotes=(title,desc,tag)=>{
  // adding a default note just for now
  newNote = {
    //taking title,description,tag from add note function which is used in home page via context api
    "_id": `645392aad28aa8f3ac5019a4`,
    "user": "644902b72393000d24c33c9c",
    "title": title, 
    "description": desc,
    "tag": tag,
    "timestamp": "2023-05-04T11:10:34.938Z",
    "__v": 0
  }
// merging the current datalist with the recent data we are adding using array concat method which returns a new array
setData(data.concat(newNote))

}

// edit note
const editNotes=(title,description,tag)=>{


}

// delete note
// deleting using array filter function which is taking id while we clicking delete button,if the deleting id matches the current note id then rest all the notes will be assigned to newNote,then setting setData to newNote to update the datalist
const deleteNotes=(id)=>{
newNote=data.filter((x)=>{return x._id!==id})
setData(newNote);
}


      
    return (
        // default boilerplate of context api data provider,we can send all the data or func we need
        <noteContext.Provider value={{data,setData,addNotes,editNotes,deleteNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
