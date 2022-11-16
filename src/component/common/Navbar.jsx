import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
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
                    <li><Link to="/">Log-In</Link></li>
                    <li><Link to="/">Register</Link></li>
                    <li><Link to="/">Log-Out</Link></li>

                </ul>
            </nav>

        </>
    )
}

export default Navbar;
