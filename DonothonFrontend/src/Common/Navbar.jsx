import React from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white " data-bs-theme="dark">
            <div className="d-flex justify-content-center fs-2 ms-5">
                <p className="m-0">Donothon</p>
            </div>
            <div className="end fs-5 me-5">
                <ul className="m-0">
                    <Link to="/" className="text-decoration-none text-white">
                        <li>About</li>
                    </Link>
                    <Link to="/" className="text-decoration-none text-white">
                        <li>Contact</li>
                    </Link>
                    <Link to="/signin"><li className="login-signup">LogIn/SignUp</li></Link>
                </ul>
            </div>
        </nav>
    )
}
