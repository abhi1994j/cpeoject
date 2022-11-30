import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLoginData } from '../../Reducers/AuthRed'

function Navbar() {
    const { userName, token } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoginData())
    }, []);

    // console.log(userName.split(' ')[0].toUpperCase());

    return (
        <>
            <header id="header" className="fixed-top">

                <div className="container d-flex align-items-center">

                    {/* <h1 className="logo mr-auto"><Link to={'/'}><span>JIS</span>Group</Link></h1> */}
                    <h1 className="logo mr-auto"><Link to={'/'}> <img className='w-100' style={{height:'35px'}} src="assets/img/logo/jis-logo.jpg" alt="" /> </Link></h1>

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
                            {
                            !token
                                ?
                                <>
                                    <li><Link to="/login">LogIn</Link></li>
                                    <li><Link to="/registration">Register</Link></li>
                                </>
                                :
                                <li>
                                    <Link className="dropdown-toggle " data-toggle="dropdown">
                                        <i className="icofont-user"> </i>
                                        {userName.split(' ')[0].toUpperCase()}
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        
                                        <Link className='pl-3' to="/logout"> <i className="fa-solid fa-power-off"> </i> Logout </Link>
                                    </div>
                                </li>
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
