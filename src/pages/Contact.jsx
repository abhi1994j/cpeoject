import React from 'react';
import { Link } from 'react-router-dom';

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
<<<<<<< HEAD
                    <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
=======
                    <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7459611837535!2d88.44556331395489!3d22.959581124443112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027730302f6e25%3A0xe50dfccae21e1fc!2sJIS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1669052802409!5m2!1sen!2sin" frameBorder="0" allowFullScreen></iframe>
>>>>>>> 4af99b7cc331a93a14c610812f65912a45fafdb3
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
<<<<<<< HEAD
                                            <p>A108 Adam Street<br />New York, NY 535022</p>
=======
                                            <p>Barrackpore - Kalyani Expy<br />
                                                Block A5, Block A<br />
                                                Kalyani, West Bengal 741235,<br />
                                                INDIA<br /><br /></p>
>>>>>>> 4af99b7cc331a93a14c610812f65912a45fafdb3
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="icofont-envelope"></i>
                                            <h4>Email:</h4>
<<<<<<< HEAD
                                            <p>info@example.com<br />contact@example.com</p>
=======
                                            <p>info@jisuniversity.ac.in<br />admissions@jisuniversity.ac.in</p>
>>>>>>> 4af99b7cc331a93a14c610812f65912a45fafdb3
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
<<<<<<< HEAD
                                            <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
=======
                                            <p>+91 8697743361<br /> +91 8697743362 </p>
>>>>>>> 4af99b7cc331a93a14c610812f65912a45fafdb3
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row mt-5 justify-content-center" data-aos="fade-up">
                            <div className="col-lg-10">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="form-row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

        </>
    )
}

export default Contact
