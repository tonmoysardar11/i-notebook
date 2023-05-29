import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';



const Login = () => {
    const output = useContext(noteContext);
  const {showAlert}=output;




    let navigate=useNavigate();
    const host = "http://localhost:5000";
    const [login, setLogin] = useState({email:'',password:''});


    const change=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})

    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${host}/api/auth/login`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:login.email,password:login.password})
          });
          const json=await response.json();
          if(json.success){
            const response2=await fetch(`${host}/api/auth/getuser`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                  "Content-Type": "application/json",
                  "user-token": json.userToken
                }
              });
              const json2=await response2.json();

              console.log(json2)
            
            localStorage.setItem("token",json.userToken)
            navigate('/home');
            showAlert('success',`Success!! Welcome to iNotebook ${json2.name}`)
            
        }
        else 

        showAlert('danger','Error!! Invalid inputs')

    }

    return (
        <form className='login' onSubmit={handlesubmit}>
            <h3 className='my-4'><b>Log In !</b></h3>
            <div className="mb-3 mx-auto " >
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email'value={login.email} onChange={change} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={login.password} name='password' onChange={change} />
            </div>
            <button  type="submit" className="logo2" >Submit</button>
        </form>
    )
}

export default Login
