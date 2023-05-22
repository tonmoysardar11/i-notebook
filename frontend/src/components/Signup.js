import React from 'react';

const Signup = () => {
    return (
        <form className='login' >
            <h3 className='my-4'><b>Sign Up Now !</b></h3>
            <div className="mb-3 mx-auto " >
                <label htmlFor="name" className="form-label">Name</label>
                <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 mx-auto " >
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Set Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" />
            </div>
            <button disabled type="submit" className="logo2" >Submit</button>
        </form>
    );
}

export default Signup;
