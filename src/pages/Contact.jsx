import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Contact</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Contact</li>
                            </ol>
                        </div>

                    </div>
                </section>

                {/* <!-- ======= Contact Section ======= --> */}
                <div className="map-section">
                    <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7459611837535!2d88.44556331395489!3d22.959581124443112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027730302f6e25%3A0xe50dfccae21e1fc!2sJIS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1669052802409!5m2!1sen!2sin" frameBorder="0" allowFullScreen></iframe>
                </div>

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row justify-content-center" data-aos="fade-up">

                            <div className="col-lg-10">

                                <div className="info-wrap">
                                    <div className="row">
                                        <div className="col-lg-4 info">
                                            <i className="icofont-google-map"></i>
                                            <h4>Location:</h4>
                                            <p>Barrackpore - Kalyani Expy<br />
                                                Block A5, Block A<br />
                                                Kalyani, West Bengal 741235,<br />
                                                INDIA<br /><br /></p>
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="icofont-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@jisuniversity.ac.in<br />admissions@jisuniversity.ac.in</p>
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+91 8697743361<br /> +91 8697743362 </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                       <ContactForm/>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Contact
