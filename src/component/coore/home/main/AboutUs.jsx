import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getApiData } from '../../../../AxiosMethods/AxiosMethods';
function AboutUs() {
  const [AboutData, setAboutData] = useState([]);

  const getAboutData = async () => {
    const res = await getApiData('about');
    setAboutData(res.data)
  }

  useEffect(() => {
    getAboutData();
  }, [])
  return (
    <>
      <section id="about-us" className="about-us">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>About Us</h2>
          </div>
          {
            AboutData.map((item) => {
              return (
                <div className="row content" key={item.id}>
                  <div className="col-lg-6" data-aos="fade-right">
                    <h2>{item.data}</h2>
                    <h3>{item.data1}</h3>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                    <p>
                      {item.content}
                    </p>
                    {/* <p className="font-italic">
                      {item.content1}
                    </p> */}
                    {/* <p className="font-italic">
                      {item.content2}
                    </p> */}
                    {/* <p className="font-italic">
                      {item.content3}
                    </p> */}
                    <ul>
                      <li><i className="ri-check-double-line"></i>{item.features}</li>
                      <li><i className="ri-check-double-line"></i>{item.features1}</li>
                      <li><i className="ri-check-double-line"></i>{item.features2}</li>
                      <li><i className="ri-check-double-line"></i>{item.features3}</li>
                    </ul>
                  </div>
                </div>
              )
            })}
          {/* <div className="row content">
            <div className="col-lg-6" data-aos="fade-right">
              <h2>Eum ipsam laborum deleniti velitena</h2>
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
              </ul>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
          </div> */}

        </div>
      </section>

    </>
  )
}

export default AboutUs
