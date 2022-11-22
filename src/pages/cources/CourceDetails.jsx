import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetailsData } from '../../Reducers/CourseDetRed';

const CourceDetails = () => {
    const {detailsData}=useSelector(state=>state.CourceDetRed);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getDetailsData());
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
                                            <Link to={`/apply/${item.courceName}`} className="btn-buy">Apply</Link>
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
