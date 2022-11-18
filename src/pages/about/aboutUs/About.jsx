import React from 'react';
import AboutUs from '../../../component/coore/home/main/AboutUs';
import Client from '../../../component/coore/home/main/Client';
import AboutBread from './AboutBread';
import AboutTeam from './AboutTeam';

function About() {
    return (
        <>
            <main id="main">
                {/* ----------Breadcrumbs------------- */}
                <AboutBread />
                {/* <!-- ======= About Us Section ======= --> */}
                <AboutUs />
                {/* <!-- ======= Our Team Section ======= --> */}
                <AboutTeam />
                {/* <!-- ======= Our Clients Section ======= --> */}
                <Client />
            </main>

        </>
    )
}

export default About
