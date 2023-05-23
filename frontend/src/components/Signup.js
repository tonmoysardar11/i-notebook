import React,{useState} from 'react';

const Signup = () => {
    const host = "http://localhost:5000";
    const [signup, setSignup] = useState({name:'',email:'',password:'',cpassword:''});


    const change=(e)=>{
        setSignup({...signup,[e.target.id]:e.target.value});

    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${host}/api/auth/createuser`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name:signup.name,email:signup.email,password:signup.password})
          });
          const json=await response.json();
          if(json.success){
            console.log("token",json.token)
            
        }
        else alert('Error')

          console.log(json);

    }






    return (
        <form className='login' onSubmit={handlesubmit} >
            <h3 className='my-4'><b>Sign Up Now !</b></h3>
            <div className="mb-3 mx-auto " >
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name"  value={signup.name}  onChange={change} />
            </div>
            <div className="mb-3 mx-auto " >
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  value={signup.email} onChange={change} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Set Password</label>
                <input type="password" className="form-control" id="password"  value={signup.password} onChange={change} />
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword"  value={signup.cpassword} onChange={change} />
            </div>
            <button disabled={signup.password!==signup.cpassword||signup.name.length<3} type="submit" className="logo2" >Submit</button>
        </form>
    );
}

export default Signup;
