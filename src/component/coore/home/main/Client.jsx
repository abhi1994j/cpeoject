import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getApiData } from '../../../../AxiosMethods/AxiosMethods';
function Client() {
    const [ClientData, setClientData] = useState([]);

    const getClientData = async () => {
        const res = await getApiData('clients');
        setClientData(res.data);
        console.log(res.data);
    }
    useEffect(() => {
        getClientData();
    }, [])
    return (
        <>
            <section id="clients" className="clients">


                <div className="section-title">
                    <h2>Clients</h2>
                </div>

                <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">
                    {
                        ClientData.map((item) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-6" key={item.id}>
                                    <div className="client-logo">
                                        <img src={item.logo} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            )
                        })}
                    {/* <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo">
                            <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo">
                            <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo">
                            <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo">
                            <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo">
                            <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo">
                            <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo">
                            <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                        </div>
                    </div> */}

                </div>
            </section>

        </>
    )
}

export default Client
