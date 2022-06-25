import React from "react";
import "./styles/about.css";
import Background from "./images/background.jpeg";
const About = () => {
  return (
    <React.Fragment className="About">
      <section id="about" style={{ backgroundImage: `url(${Background})` }}>
        <div className="about-1">
          <h1 className="display-3" style={{ fontFamily: "Monaco" }}>
            ABOUT US
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            reiciendis optio repellat dicta voluptatum, itaque laborum tenetur
            non magni quibusdam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, impedit! Ipsa, ab enim. Sed minus nobis
            natus error obcaecati hic et enim, mollitia maiores esse
            exercitationem aut, provident lorem laborum accusamus.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Temporibus reiciendis
            o hic et enim, mollitia maiores esse exercitationem aut, provident
            lorem laborum accusamus.
          </p>
        </div>
        <div id="about-2">
          <div className="content-box-lf">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="about-item text-center p-2 pb-5 ml-2">
                    <i className="fa fa-book mt-3"></i>
                    <h3>Mission</h3>
                    <hr />
                    <p className="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit nemo fuga dolores eius exercitationem,
                      perspiciatis quibusdam, itaque, excepturi voluptatum harum
                      architecto dicta. Accusantium inventore repellat odit
                      consectetur cumque vel recusandae?
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-item text-center p-2 pb-5 mr-2 ml-2">
                    <i className="fa fa-book mt-3"></i>
                    <h3>Vision</h3>
                    <hr />
                    <p className="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit nemo fuga dolores eius exercitationem,
                      perspiciatis quibusdam, itaque, excepturi voluptatum harum
                      architecto dicta. Accusantium inventore repellat odit
                      consectetur cumque vel recusandae?
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-item text-center p-2 pb-5 mr-2">
                    <i className="fa fa-book mt-3"></i>
                    <h3>Achievement</h3>
                    <hr />
                    <p className="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit nemo fuga dolores eius exercitationem,
                      perspiciatis quibusdam, itaque, excepturi voluptatum harum
                      architecto dicta. Accusantium inventore repellat odit
                      consectetur cumque vel recusandae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
