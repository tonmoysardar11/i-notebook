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
      },
      {
        "_id": "645392aad28a3a8f3ac5019a5",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a6",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a7",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a8",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a9",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a1q",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a2w",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a3e",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      },
      {
        "_id": "645392aad28a3a8f3ac5019a4r",
        "user": "644902b72393000d24c33c9c",
        "title": "Notes2",
        "description": "Delete My Description",
        "tag": "Delete My Tag",
        "timestamp": "2023-05-04T11:10:34.938Z",
        "__v": 0
      }
    ]
    const [data, setData] = useState(notes);
      
    return (
        // default boilerplate of context api data provider
        <noteContext.Provider value={{data,setData}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
