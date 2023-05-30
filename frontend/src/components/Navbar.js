import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import noteContext from '../context/notes/noteContext';


const Navbar = () => {
    const output = useContext(noteContext);
    const { showAlert } = output;




    // using uselocaton to make effect in active page navbar
    let location = useLocation();



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <button className='logo'>
                        iNotebook
                    </button>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                {!localStorage.getItem('token') ? <div className="d-flex">
                    <Link className="button mx-2 " role='button' to="/login">Log In</Link>
                    <Link className="button mx-2 " role='button' to="/signup">Sign Up</Link>
                </div> : <div className="d-flex">
                    <Link className="button mx-2 " role='button'
                        onClick={() => {
                            showAlert('warning', 'Logged Out!! Please log in to continue');
                            localStorage.clear();
                        }} to="/login">Log Out</Link>
                </div>}
            </div>
        </nav>

    )
}

export default Navbar

