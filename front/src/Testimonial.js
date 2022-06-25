import React from "react";
import "./styles/testimonial.css";

const Testimonial = () => {
  return (
    <React.Fragment className="Testimonial">
      <section id="testimonials">
        <h1 className="title">DONOR TESTIMONIALS</h1>
        <div
          id="testimonials-corousel"
          className="carousel slide"
          data-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="testimonial-image"
                src={require(`./images/profile.jpg`)}
                alt="dog-profile"
              />
              <h1>Mr XYZk</h1>
              <h2 className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                numquam sint omnis quibusdam illum iure laboriosam ratione vel
                tenetur doloremque quam!.
              </h2>
            </div>
            <div className="carousel-item">
              <img
                className="testimonial-image"
                src={require(`./images/profile.jpg`)}
                alt="lady-profile"
              />
              <h1>Mr yyz</h1>
              <h2 className="testimonial-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
                dolorem!.
              </h2>
            </div>
            <div className="carousel-item">
              <img
                className="testimonial-image"
                src={require(`./images/profile.jpg`)}
                alt="lady-profile"
              />
              <h1>Mr ZZy</h1>
              <h2 className="testimonial-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
                dolorem!.
              </h2>
            </div>
            <div className="carousel-item">
              <img
                className="testimonial-image"
                src={require(`./images/profile.jpg`)}
                alt="lady-profile"
              />
              <h1>Mr XXZ</h1>
              <h2 className="testimonial-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
                dolorem!.
              </h2>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonials-corousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonials-corousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Testimonial;
