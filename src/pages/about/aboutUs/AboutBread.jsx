import React from 'react';
import {Link} from 'react-router-dom';

function AboutBread() {
    return (
        <>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>About</li>
                        </ol>
                    </div>

                </div>
            </section>

        </>
    )
}

export default AboutBread
