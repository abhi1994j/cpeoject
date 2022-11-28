import React from 'react';
import AboutUs from '../../../component/coore/home/main/AboutUs';
import AboutCompany from './AboutCompany';
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
                <AboutCompany />
            </main>

        </>
    )
}

export default About
