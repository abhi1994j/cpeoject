import React from 'react';
import { Link } from 'react-router-dom';
import CourceDetails from './CourceDetails';
import CourceQuestions from './CourceQuestions';

function Cources() {
    return (
        <>


            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Pricing</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Cources</li>
                            </ol>
                        </div>

                    </div>
                </section>

                {/* <!-- =======Cources or Pricing Section  ======= --> */}
                    <CourceDetails/>

                {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
                <CourceQuestions/>
            </main>

        </>
    )
}

export default Cources;
