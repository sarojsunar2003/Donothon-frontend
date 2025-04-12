import React from 'react'
import { Link } from 'react-router-dom'


export const NGONavbar = ({ toggleSidebar }) => {

  return (
    <nav className="app-header navbar navbar-expand bg-body">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-lte-toggle="sidebar"
                            href="#"
                            role="button"
                            onClick={toggleSidebar}
                        >
                        <i className='fa-solid fa-bars' />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}
