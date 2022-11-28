import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetailsData } from '../../Reducers/CourseDetRed';
import CourceDetailsModal from './CourceDetailsModal';

const CourceDetails = () => {

    const [open, setOpen] = React.useState(false);

    const { detailsData } = useSelector(state => state.CourceDetRed);
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();

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
                                <div className="col-lg-3 col-md-6 pt-3" key={item.id}>
                                    <div className="box">
                                        <h3>{item.courceName}</h3>
                                        <img className='w-100 mb-3' src={item.CourseImg} alt="" />
                                        <br />
                                        <ul>
                                            <li><strong>Duration: </strong>{item.duration}</li>
                                            <li><strong>Cource Fees: </strong>{item.cost}</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            {token
                                                ?
                                                <Link to={`/apply/${item.courceName}`} className="btn-buy">Apply</Link>
                                                :
                                                <button onClick={() => setOpen(true)} className='btn btn-success'>Apply</button>
                                            }
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>

                </div>
            </section>

            <CourceDetailsModal open={open} setOpen={setOpen} />

        </>
    )
}

export default CourceDetails;
