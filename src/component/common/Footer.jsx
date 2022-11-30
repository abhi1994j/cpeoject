import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <>
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>JISGROUP</h3>
                <p>
                  Barrackpore - Kalyani Expy<br />
                  Block A5, Block A<br />
                  Kalyani, West Bengal 741235,<br />
                  INDIA<br /><br />
                  <strong>Phone:</strong> 03325808640<br />
                  <strong>Email:</strong> info@jisuniversity.ac.in<br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/aboutus">About</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/testimonials">Testimonials</Link></li>
                  {/* <li><i className="bx bx-chevron-right"></i> <a>Privacy policy</a></li> */}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/cources">Cources</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/blog">Blog</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/contact">Contact</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/login">LogIn</Link></li>
                  {/* <li><i className="bx bx-chevron-right"></i> <a>Graphic Design</a></li> */}
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Receive news and best course offers by email from JIS University. You can unsubscribe whenever you want, it is totally free</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">

          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy; Copyright <strong><span>JISGROUP</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">APS</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://twitter.com/jis_university" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/JISUniversityKolkata" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/jisgroup_official/?hl=en" className="instagram"><i className="bx bxl-instagram"></i></a>
            {/* <a className="google-plus"><i className="bx bxl-skype"></i></a> */}
            <a href="https://in.linkedin.com/company/jis-university-admission-cell" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>


      {/* <a href='#header' className="back-to-top"><i className="icofont-simple-up"></i></a> */}

    </>
  )
}
