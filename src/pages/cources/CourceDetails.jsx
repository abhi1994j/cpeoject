import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getApiData } from '../../AxiosMethods/AxiosMethods'

const CourceDetails = () => {
    const [detailsData, setDetailsData] = useState([])

    const getDetailsData = async () => {
        const res = await getApiData('courseDetails');
        setDetailsData(res.data);
    }

    useEffect(() => {
        getDetailsData();
    }, [])

    console.log(detailsData);
    return (
        <>
            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Course Details</h2>
                    </div>

                    <div className="row">

                        {
                            detailsData.map((item) => 
                                <div className="col-lg-3 col-md-6" key={item.id}>
                                    <div className="box">
                                        <h3>{item.name}</h3>
                                        <ul>
                                            <li><strong>Course Type: </strong>{item.type}</li>
                                            <li><strong>Duration: </strong>{item.duration}</li>
                                            <li><strong>Total Cost: </strong>{item.cost}</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="" className="btn-buy">Apply</a>
                                        </div>
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

export default CourceDetails
