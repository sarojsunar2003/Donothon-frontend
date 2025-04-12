import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { Navbar } from './Navbar'

export const Sidebar = () => {

  //for closing sidebar...
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const LogOutFun = () => {
    localStorage.clear()
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <aside className={`app-sidebar bg-dark shadow ${isSidebarOpen ? "open" : "d-none"}`} data-bs-theme="dark">
        <div className="sidebar-brand text-white">
          
            Donothon
          
        </div>

        <div className="" data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll" tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            {/*begin::Sidebar Menu*/}
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link to="/v" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    Requests
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <Link to="acceptedrequest" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    Accepted
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className='app-main'>
        <Outlet></Outlet>
      </main>
    </>
  )
}
