import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

<<<<<<< HEAD
                <h1 className="logo mr-auto"><a href="index.html"><span>Com</span>pany</a></h1>
=======
                <h1 className="logo mr-auto"><a href="index.html"><span>JIS</span>Group</a></h1>
>>>>>>> 4af99b7cc331a93a14c610812f65912a45fafdb3
                
                    {/* -----------Navbar---------------- */}
                    <button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu"></i></button>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/cources">Cources</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/">LogIn</Link></li>
                            <li><Link to="/">Register</Link></li>
                        </ul>
                    </nav>


                    {/* ------------Social-Media-------------- */}
                    <div className="header-social-links">
                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>

                </div>
            </header>

        </>
    )
}

export default Navbar;
