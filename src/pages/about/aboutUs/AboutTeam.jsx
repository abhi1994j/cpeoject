import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getApiData } from '../../../AxiosMethods/AxiosMethods';

function Team() {
    const [TeamData, setTeamData] = useState([]);

    const getTeamData = async () => {
        const res = await getApiData('team');
        setTeamData(res.data);
        console.log(res.data);
    }
    useEffect(() => {
        getTeamData();
    }, [])
    return (
        <>
            <section id="team" className="team section-bg">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Our <strong>Team</strong></h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        {
                            TeamData.map((item) => {
                                return (
                                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={item.id}>
                                        <div className="member" data-aos="fade-up">
                                            <div className="member-img">
                                                <img src={item.image} className="img-fluid" alt="" />
                                                <div className="social">
                                                    <a href=""><i className="icofont-twitter"></i></a>
                                                    <a href=""><i className="icofont-facebook"></i></a>
                                                    <a href=""><i className="icofont-instagram"></i></a>
                                                    <a href=""><i className="icofont-linkedin"></i></a>
                                                </div>
                                            </div>
                                            <div className="member-info">
                                                <h4>{item.name}</h4>
                                                <span>{item.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="icofont-twitter"></i></a>
                                        <a href=""><i className="icofont-facebook"></i></a>
                                        <a href=""><i className="icofont-instagram"></i></a>
                                        <a href=""><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                <div className="member-img">
                                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="icofont-twitter"></i></a>
                                        <a href=""><i className="icofont-facebook"></i></a>
                                        <a href=""><i className="icofont-instagram"></i></a>
                                        <a href=""><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                <div className="member-img">
                                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="icofont-twitter"></i></a>
                                        <a href=""><i className="icofont-facebook"></i></a>
                                        <a href=""><i className="icofont-instagram"></i></a>
                                        <a href=""><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Team
