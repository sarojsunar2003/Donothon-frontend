import React from 'react'
import "../Styles/Welcome.css"
import base from "../assets/Images/Base.jpg"
import about from "../assets/Images/About.webp"
import call from "../assets/Images/call-vector-image.png"
import donation from "../assets/Images/Donation-LOGO.jpg"
import insta from "../assets/Images/Instagram-Logo-PNG.webp"
import location from "../assets/Images/Location.jpg"
import mail from "../assets/Images/Mail-vector-image.png"
import ngo from "../assets/Images/NGO-LOGO.jpg"
import users from "../assets/Images/USER-LOGO.jpg"
import { Link } from 'react-router-dom'

export const Welcome = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="style1.css" />
            <nav className="navbar navbar-expand-lg bg-dark text-white" data-bs-theme="dark">
                <div className="d-flex justify-content-center fs-2 ms-5">
                    <p className="m-0">Donothon</p>
                </div>
                <div className="end fs-5 me-5">
                    <ul className="m-0">
                        <a href="#about" className="text-decoration-none text-white">
                            <li>About</li>
                        </a>
                        <a href="#contact" className="text-decoration-none text-white">
                            <li>Contact</li>
                        </a>
                        <Link to="/signin"><li className="login-signup">LogIn/SignUp</li></Link>
                    </ul>
                </div>
            </nav>
            {/* <Navbar/> */}
            <img src={base} alt="..." className="base-image" />
            <div className="after d-flex justify-content-evenly align-items-center bg-dark p-5">
                <div className="inner">
                    <div className="round bg-white text-primary d-flex justify-content-center align-items-center">
                        <img src={ngo} alt="..." />
                    </div>
                    <p className="text-white text-rounds mt-2">
                        200+ <br />
                        NGOs
                    </p>
                </div>
                <div className="inner">
                    <div className="round bg-white text-primary d-flex justify-content-center align-items-center">
                        <img src={users} alt="..." />
                    </div>
                    <p className="text-white text-rounds mt-2">3000+ Users</p>
                </div>
                <div className="inner">
                    <div className="round bg-white text-primary d-flex justify-content-center align-items-center">
                        <img src={donation} alt="..." />
                    </div>
                    <p className="text-white text-rounds mt-2">10000+ Donations</p>
                </div>
            </div>
            <div className="about" id="about">
                <p style={{ textAlign: "center", fontSize: 50, margin: "2rem auto" }}>
                    About Us
                </p>
                <p className="about-text fs-5">
                    Donothon is a platform that bridges the gap between donors and
                    NGOs by making the process of donating clothes simple, transparent, and
                    effective. We aim to reduce clothing waste and promote sustainable giving
                    by connecting compassionate individuals with organizations that serve
                    those in need.
                </p>
                <p style={{ textAlign: "justify" }}>
                    <img src={about} alt="..." className="About-image" />
                </p>
            </div>
            <div
                className="contact d-flex justify-content-evenly align-items-center p-5"
                id="contact"
            >
                <div className="inner2">
                    <div className="round2 bg-dark border border-4 border-dark text-primary ms-3">
                        <img src={location} alt="..." />
                    </div>
                    <p className="text-dark fs-6 mt-2">
                        <span className="fw-bold">Address</span>: 199 west Streets NY, 380491
                    </p>
                </div>
                <div className="inner2">
                    <div className="round2 border border-5 border-dark text-primary ms-3">
                        <img src={call} alt="..." />
                    </div>
                    <p className="text-dark fs-6 text-rounds mt-2">
                        +91 9999999999
                        <br />
                        +91 9999999999
                    </p>
                </div>
                <div className="inner2" style={{ width: 150 }}>
                    <div className="round2 bg-dark border border-4 border-dark text-primary ms-3">
                        <img src={mail} alt="..." />
                    </div>
                    <p className="text-dark text-rounds mt-2 fs-6">
                        abc@donothon.com
                        <br />
                        <span className="text-white">h</span>
                    </p>
                </div>
                <div className="inner2">
                    <div className="round2 bg-dark border border-4 border-dark text-primary ms-3 d-flex align-items-center justify-content-center">
                        <img
                            src={insta}
                            alt="..."
                            style={{ width: "90%", height: "90%" }}
                        />
                    </div>
                    <p className="text-dark fs-6 text-rounds mt-2">
                        @Donothon
                        <br />
                        <span className="text-white">h</span>
                    </p>
                </div>
            </div>
            <div className="container-contact">
                <div className="form">
                    <div className="form-section">
                        <h2 className="overflow-hidden">Get in touch</h2>
                        <form>
                            <div className="input-group">
                                <input type="text" placeholder="Name" required="" />
                                <input type="email" placeholder="Email" required="" />
                            </div>
                            <input type="text" placeholder="Subject" required="" />
                            <textarea placeholder="Message" required="" defaultValue={""} />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="image-section">
                        <img src="" alt="Lion" />
                    </div>
                </div>
            </div>
            <div className="footer-text">✦ All rights reserved © 2025 Donothon ✦</div>
        </>
    )
}
