import React, { useState } from 'react';
import { useEffect } from 'react';
import { getApiData } from '../../../../AxiosMethods/AxiosMethods';

const PlacedStudent = () => {
    const [stdData, setStdData] = useState([]);

    const getStudent = async () => {
        const res = await getApiData('placements');
        setStdData(res.data);
    }

    useEffect(() => {
        getStudent();
    }, []);

    // console.log(stdData);

    return (
        <>
                <section id="testimonials" className="testimonials section-bg">
                    <div className="container">

                    <div className="section-title">
                        <h2>Placed Students</h2>
                    </div>

                    <div className="row">

                        {
                            stdData.map((item) =>
                            <div className="col-lg-6 mt-2" data-aos="fade-up" key={item.id}>
                            <div className="testimonial-item">
                                <img src={item.image} className="testimonial-img" alt="" />
                                <h3>{item.studentName}</h3>
                                <h4><strong>Company: </strong>{item.company}</h4>
                                <h4><strong>Package: </strong>{item.package}</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    {item.comments}
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                )
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default PlacedStudent;
