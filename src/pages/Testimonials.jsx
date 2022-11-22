import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getApiData } from '../AxiosMethods/AxiosMethods'

const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([])

    const getTestimonialslsData = async () => {
        const res = await getApiData('testimonials');
        setTestimonialsData(res.data);
    }
    useEffect(() => {
        getTestimonialslsData();
    }, [])

    return (
        <>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Testimonials</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Testimonials</li>
                            </ol>
                        </div>

                    </div>
                </section>

                {/* <!-- ======= Testimonials Section ======= --> */}
                <section id="testimonials" className="testimonials section-bg">
                    <div className="container">

                        <div className="row">
                            {
                                testimonialsData.map((item) =>
                                    <div className="col-lg-6" data-aos="fade-up" key={item.id}>
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                            <h3>{item.name}</h3>
                                            <h4>{item.role}</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                {item.speech}
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </section>

            </main>

        </>
    )
}

export default Testimonials