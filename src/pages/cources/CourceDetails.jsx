import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
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
                                        <h3>{item.courceName}</h3>
                                        <ul>
                                            <li><strong>Duration: </strong>{item.duration}</li>
                                            <li><strong>Cource Fees: </strong>{item.cost}</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <Link to={`/apply`} className="btn-buy">Apply</Link>
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
