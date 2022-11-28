import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getApiData } from '../../../../AxiosMethods/AxiosMethods'
function Placements()  {
    const [PlacementData, setPlacementData] = useState([]);

    const getPlacementData = async () => {
        const res = await getApiData('placements');
        // console.log('placement api dfata ==>', res);
        setPlacementData(res.data)
    }

    useEffect(() => {
        getPlacementData();
    }, [])

    return (
        <>
            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Our Students Placement Details</h2>
                    </div>

                    <div className="row">
                        {
                            PlacementData.map((item) =>
                                <div className="col-lg-3 col-md-6" key={item.id}>
                                    <div className="box">
                                        <h3>{item.studentName}</h3>
                                        <ul>
                                            <li><strong>Company: </strong>{item.company}</li>
                                            <li><strong>Package: </strong>{item.package}</li>
                                            <li><p>{item.comments}</p></li>
                                        </ul>
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

export default Placements