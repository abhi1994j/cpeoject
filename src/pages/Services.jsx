import React from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../component/coore/home/main/HomeServices';

function services() {
  return (
    <>

      <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Services</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>Services</li>
              </ol>
            </div>

          </div>
        </section>

        {/* <!-- ======= Services Section ======= --> */}

        <HomeServices/>

        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Features</h2>
              <p>Located in West Bengal, JIS University is a Catholic, Franciscan college that has provided well-rounded liberal arts education for more than 130 years. With nearly 2,000 students and faculty members, this small college has developed a powerful website that effectively showcases its academics as well as its campus and student life.</p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                  <h3><a href="">Canteen Fesility</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
                  <h3><a href="">Basketball Court</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                  <h3><a href="">Swiming Pool</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
                  <h3><a href="">Library</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-database-2-line" style={{ color: "#47aeff" }}></i>
                  <h3><a href="">Separate Girls & Boys Hostel available</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
                  <h3><a href="">Antiragging cell</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
                  <h3><a href="">Parking Available</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }}></i>
                  <h3><a href="">Theatre</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                  <h3><a href="">Free Wifi around the Campus</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                  <h3><a href="">Statoion and Bus depot around 3km from Campus</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-base-station-line" style={{ color: "#ff5828" }}></i>
                  <h3><a href="">Wheel Chair accessible all over the Campus</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-fingerprint-line" style={{ color: "#29cc61" }}></i>
                  <h3><a href="">Football Ground</a></h3>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

    </>
  )
}

export default services;
