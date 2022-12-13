import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar.css'
import { AiFillStop } from "react-icons/ai";



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-custom navbar-expand-lg py-md-4" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Fresher's Stop <AiFillStop /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link px-4">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item nav-link px-3">
                                <Link className="nav-link active" aria-current="page" to="/pg">Hostel</Link>
                            </li>
                            <li className="nav-item nav-link px-3">
                                <Link className="nav-link active" aria-current="page" to="/hospital">Hospital</Link>
                            </li>
                            <li className="nav-item nav-link px-3">
                                <Link className="nav-link active" aria-current="page" to="/blog">Blog section</Link>
                            </li>
                            <li className="nav-item nav-link px-3">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item nav-link px-3">
                                <Link className="nav-link active" aria-current="page" to="/contribute">Would like to Contribute?</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar