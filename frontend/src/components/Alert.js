import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'


const Alert = () => {
  const output = useContext(noteContext);
  const {alert}=output;
  return (
    <div style={{ height: '8vh' }}>
      {alert && <div className={`alert alert-${alert.type}`} role="alert">
        <strong>{alert.message}</strong>
      </div>}
    </div>
  )
}

export default Alert
