import React from 'react'

function Carosel() {
    return (
        <>
            <section id="hero">
                <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">


                        <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)',
}}>
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp">
                                    <h2>Welcome to <span>JIS Group</span></h2>
                                    <p>JIS Group Educational Initiatives - the largest educational conglomerate of Eastern India with 37 Institutions, 170 programmes and 39,000 students began its journey 24 years back. The journey, though not easy, has been quite a successful one. JIS University was established through the Legislative Act of the Government of West Bengal, viz. JIS University Act, 2014 (West Bengal Act XXII of 2014) that came into force in February, 2015.</p>
                                    <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.jpg)',
}}>
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp">
                                    <h2>OUR COURSES</h2>
                                    <p>We provide instructions,teaching, training and research in specialized fields of Science,Engineering & Technology, Pharmacy, Management, Law, Education and Hospitality</p>
                                    <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.jpg)'}}>
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp">
                                    <h2>ALLIANCE & PARTNERSHIPS</h2>
                                    <p>Tie ups with different organization, foreign Universities. various Chamber of Commerce and trade bodies.</p>
                                    <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                </div>
            </section>
        </>
    )
}

export default Carosel;
