import React from 'react'

const NoteItem = (props) => {
    
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="card mx-2 my-2" >
                <h4 className='mx-2 my-2'>{props.data.title}</h4>
                <p className='mx-4 my-2'>{props.data.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nisi pariatur aliquam sint possimus.</p>
                <div id="btnGrp">
                    <button className='uiBtn my-2 mx-2'> <i className="fa-solid fa-pen-to-square"></i></button>
                    <button className='uiBtn my-2'> <i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
