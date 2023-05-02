import React from 'react'


const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary text-light" data-bs-theme="dark">
            <div className="container-fluid" >
                <a className="navbar-brand" href="/">
                    <button className='logo'>
                        i Notebook
                    </button>
                </a>
            </div>
        </nav>

    )
}

export default Navbar
