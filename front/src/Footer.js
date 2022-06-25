import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <React.Fragment className="Footer">
      <footer className="footer-section page-footer">
        <div className="container">
          <div className="footer-cta py-5">
            <div className="row">
              <div className="col-sm-6 col-xl-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>South Delhi,New Delhi-110019</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+91 9973692477</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 mb-30">
                <div className="single-cta">
                  <i className="fa-solid fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="#">
                      <img
                        src={require(`./images/logo2.jpg`)}
                        alt="logo2-footer"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li key="1">
                      <a href="#">Home</a>{" "}
                    </li>
                    <li key="2">
                      <a href="">About</a>
                    </li>
                    <li key="3">
                      <a href="">Donate</a>
                    </li>
                    <li key="4">
                      <a href="">Contact Us</a>
                    </li>
                    <li key="5">
                      <a href="">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text">
                    <p>Keep up with our latest news of charity organisation</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Adderess" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-textandicon">
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia imped it maxime quaerat fugiat fugit magni suscipit
                praesentium vel? Exce pturi minus, quaerat distinctio voluptatem
                iure officia maiores l abore at? Incidunt, similique.
              </p>
            </div>
            <div className="footer-social-icon">
              <span className="follow-us">Follow us</span>
              <a href="#">
                <i className="fab fa-facebook-f facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="conatiner">
            <div className="row">
              <div className="col-xl-6 col-lg-6 ">
                <div className="copyright-text">
                  <p>
                    Copyright © 2022, All Rights Reserved{" "}
                    <a href="">Code4education</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 ">
                <div className="footer-menu">
                  <ul>
                    <li key="1">
                      <a href="#">Home</a>
                    </li>
                    <li key="2">
                      <a href="">Terms</a>
                    </li>
                    <li key="3">
                      <a href="">Policy</a>
                    </li>
                    <li key="4">
                      <a href="">Privacy</a>
                    </li>
                    <li key="5">
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
