import React from 'react'
import Navbar from '../../../component/common/Navbar'

function AboutHeader() {
    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <h1 class="logo mr-auto"><a href="index.html"><span>Com</span>pany</a></h1>

                        {/* <Navbar/> */}

                    <div class="header-social-links">
                        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                    </div>

                </div>
            </header>

        </>
    )
}

export default AboutHeader
