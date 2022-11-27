import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const { token } = useSelector(state => state.auth);

    return (
        <>
            <header id="header" className="fixed-top">

                <div className="container d-flex align-items-center">

                    <h1 className="logo mr-auto"><Link to={'/'}><span>JIS</span>Group</Link></h1>

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
                            <li><Link to="/login">LogIn</Link></li>
                            {!token
                                ?
                                <li><Link to="/registration">Register</Link></li>
                                :
                                <li><Link to="/logout">Logout</Link></li>
                            }
                        </ul>
                    </nav>


                    {/* ------------Social-Media-------------- */}
                    <div className="header-social-links">
                        <a href="https://twitter.com/jis_university" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="https://www.facebook.com/JISUniversityKolkata" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="https://www.instagram.com/jisgroup_official/?hl=en" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="https://in.linkedin.com/company/jis-university-admission-cell" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Navbar;
