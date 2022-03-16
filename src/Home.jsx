import React from 'react';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
            
  <header>
    <div className="profile-page sidebar-collapse">
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
        color-on-scroll={400}
      >
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="# " rel="tooltip">
              Le Minh Thong CV
            </a>
            <button
              className="navbar-toggler navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div className="page-content">
    <div>
      <div className="profile-page">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="green">
            <div
              className="page-header-image"
              data-parallax="true"
              style={{ backgroundImage: 'url("assets/images/cc-bg-1.jpg")' }}
            />
            <div className="container">
              <div className="content-center">
                <div className="cc-profile-image">
                  <a href="# ">
                    <img src="assets/images/lmthong-avatar.png" alt="le minh thong" />
                  </a>
                </div>
                <div className="h2 title">Le Minh Thong</div>
                <p className="category text-white">
                  Web Developer
                </p>
                <a
                  className="btn btn-primary smooth-scroll mr-2"
                  href="#contact"
                  data-aos="zoom-in"
                  data-aos-anchor="data-aos-anchor"
                >
                  Hire Me
                </a>
                <a
                  className="btn btn-primary smooth-scroll mr-2"
                  href="assets/cv/leminhthong.pdf"
                  data-aos="zoom-in"
                  data-aos-anchor="data-aos-anchor"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="section">
              <div className="container">
                <div className="button-container">
                  <a
                    className="btn btn-default btn-round btn-lg btn-icon"
                    href="https://www.facebook.com/minhthong2712/ "
                    rel="tooltip"
                    title="Follow me on Facebook"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    className="btn btn-default btn-round btn-lg btn-icon"
                    href="https://www.linkedin.com/in/lmthong97/ "
                    rel="tooltip"
                    title="Follow me on Linkedin"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  
                  <a
                    className="btn btn-default btn-round btn-lg btn-icon"
                    href="https://www.instagram.com/leminhthong97/ "
                    rel="tooltip"
                    title="Follow me on Instagram"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="about">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-offset={10}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">About</div>
                  <p>
                    Hello! I am Le Minh Thong - Web Developer.
                  </p>
                  
                  
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Age:</strong>
                    </div>
                    <div className="col-sm-8">25</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Email:</strong>
                    </div>
                    <div className="col-sm-8">lmthong97@company.com</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Phone:</strong>
                    </div>
                    <div className="col-sm-8">Hidden</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Address:</strong>
                    </div>
                    <div className="col-sm-8">
                      An Giang, Viet Nam
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Language:</strong>
                    </div>
                    <div className="col-sm-8">Vietnamese, English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="skill">
        <div className="container">
          <div className="h4 text-center mb-4 title">Professional Skills</div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary">
                    <span className="progress-badge">HTML</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        data-aos="progress-full"
                        data-aos-offset={10}
                        data-aos-duration={2000}
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      />
                      <span className="progress-value">80%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary">
                    <span className="progress-badge">CSS</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        data-aos="progress-full"
                        data-aos-offset={10}
                        data-aos-duration={2000}
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      />
                      <span className="progress-value">60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary">
                    <span className="progress-badge">JavaScript</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        data-aos="progress-full"
                        data-aos-offset={10}
                        data-aos-duration={2000}
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "70%" }}
                      />
                      <span className="progress-value">70%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary">
                    <span className="progress-badge">SASS</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        data-aos="progress-full"
                        data-aos-offset={10}
                        data-aos-duration={2000}
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      />
                      <span className="progress-value">60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary">
                    <span className="progress-badge">REACTJS</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        data-aos="progress-full"
                        data-aos-offset={10}
                        data-aos-duration={2000}
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "70%" }}
                      />
                      <span className="progress-value">70%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary">
                    <span className="progress-badge">Bootstrap</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        data-aos="progress-full"
                        data-aos-offset={10}
                        data-aos-duration={2000}
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "75%" }}
                      />
                      <span className="progress-value">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="h4 text-center mb-4 title">Portfolio</div>
              <div className="nav-align-center">
                <ul className="nav nav-pills nav-pills-primary" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#web-development"
                      role="tablist"
                    >
                      <i className="fa fa-laptop" aria-hidden="true" />
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#graphic-design"
                      role="tablist"
                    >
                      <i className="fa fa-picture-o" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#Photography"
                      role="tablist"
                    >
                      <i className="fa fa-camera" aria-hidden="true" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content gallery mt-5">
            <div className="tab-pane active" id="web-development">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#web-development">
                        <figure className="cc-effect">
                          <img src="assets/images/project-1.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Recent Project</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#web-development">
                        <figure className="cc-effect">
                          <img src="assets/images/project-2.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Startup Project</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#web-development">
                        <figure className="cc-effect">
                          <img src="assets/images/project-3.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Food Order Project</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#web-development">
                        <figure className="cc-effect">
                          <img src="assets/images/project-4.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Web Advertising Project</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="tab-pane" id="graphic-design" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#graphic-design">
                        <figure className="cc-effect">
                          <img src="assets/images/graphic-design-1.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Triangle Pattern</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#graphic-design">
                        <figure className="cc-effect">
                          <img src="assets/images/graphic-design-2.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Abstract Umbrella</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#graphic-design">
                        <figure className="cc-effect">
                          <img src="assets/images/graphic-design-3.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Cube Surface Texture</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#graphic-design">
                        <figure className="cc-effect">
                          <img src="assets/images/graphic-design-4.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Abstract Line</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="Photography" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#Photography">
                        <figure className="cc-effect">
                          <img src="assets/images/photography-1.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#Photography">
                        <figure className="cc-effect">
                          <img src="assets/images/photography-3.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Wedding Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#Photography">
                        <figure className="cc-effect">
                          <img src="assets/images/photography-2.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Beach Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="#Photography">
                        <figure className="cc-effect">
                          <img src="assets/images/photography-4.jpg" alt="" />
                          <figcaption>
                            <div className="h4">Nature Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Work Experience</div>
          {/* <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body cc-experience-header">
                  <p>March 2016 - Present</p>
                  <div className="h5">CreativeM</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body">
                  <div className="h5">Front End Developer</div>
                  <p>
                    Euismod massa scelerisque suspendisse fermentum habitant
                    vitae ullamcorper magna quam iaculis, tristique sapien
                    taciti mollis interdum sagittis libero nunc inceptos tellus,
                    hendrerit vel eleifend primis lectus quisque cubilia sed
                    mauris. Lacinia porta vestibulum diam integer quisque eros
                    pulvinar curae, curabitur feugiat arcu vivamus parturient
                    aliquet laoreet at, eu etiam pretium molestie ultricies
                    sollicitudin dui.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body cc-experience-header">
                  <p>April 2014 - March 2016</p>
                  <div className="h5">WebNote</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body">
                  <div className="h5">Web Developer</div>
                  <p>
                    Euismod massa scelerisque suspendisse fermentum habitant
                    vitae ullamcorper magna quam iaculis, tristique sapien
                    taciti mollis interdum sagittis libero nunc inceptos tellus,
                    hendrerit vel eleifend primis lectus quisque cubilia sed
                    mauris. Lacinia porta vestibulum diam integer quisque eros
                    pulvinar curae, curabitur feugiat arcu vivamus parturient
                    aliquet laoreet at, eu etiam pretium molestie ultricies
                    sollicitudin dui.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset={50}
                data-aos-duration={200}
              >
                <div className="card-body cc-experience-header">
                  <p>November 2020 - February 2021</p>
                  <div className="h5">INTERSHIP</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset={50}
                data-aos-duration={200}
              >
                <div className="card-body">
                  <div className="h5">Intern Web Developer {'&'} IT Support</div>
                  <p>
                    - internship at Can Tho University of Medicine - Pharmacy<br/>
                    - Assist offices staff in network and IT issues<br/>
                    - Participate in design UI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container cc-education">
          <div className="h4 text-center mb-4 title">Education</div>
          <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset={50}
                data-aos-duration={100}
              >
                <div className="card-body cc-education-header">
                  <p>2018 - 2021</p>
                  <div className="h5">Bachelor's Degree</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset={50}
                data-aos-duration={100}
              >
                <div className="card-body">
                  <div className="h5">Bachelor of Information Technology</div>
                  <p className="category">CAN THO TECHNICAL ECONOMIC COLLEGE</p>
                  <p>
                   Studied at Can Tho Technical Economic College, graduates in Information Technology, ranked good.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body cc-education-header">
                  <p>2009 - 2013</p>
                  <div className="h5">Bachelor's Degree</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body">
                  <div className="h5">Bachelor of Computer Science</div>
                  <p className="category">University of Computer Science</p>
                  <p>
                    Euismod massa scelerisque suspendisse fermentum habitant
                    vitae ullamcorper magna quam iaculis, tristique sapien
                    taciti mollis interdum sagittis libero nunc inceptos tellus,
                    hendrerit vel eleifend primis lectus quisque cubilia sed
                    mauris. Lacinia porta vestibulum diam integer quisque eros
                    pulvinar curae, curabitur feugiat arcu vivamus parturient
                    aliquet laoreet at, eu etiam pretium molestie ultricies
                    sollicitudin dui.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body cc-education-header">
                  <p>2007 - 2009</p>
                  <div className="h5">High School</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset={50}
                data-aos-duration={500}
              >
                <div className="card-body">
                  <div className="h5">Science and Mathematics</div>
                  <p className="category">School of Secondary board</p>
                  <p>
                    Euismod massa scelerisque suspendisse fermentum habitant
                    vitae ullamcorper magna quam iaculis, tristique sapien
                    taciti mollis interdum sagittis libero nunc inceptos tellus,
                    hendrerit vel eleifend primis lectus quisque cubilia sed
                    mauris. Lacinia porta vestibulum diam integer quisque eros
                    pulvinar curae, curabitur feugiat arcu vivamus parturient
                    aliquet laoreet at, eu etiam pretium molestie ultricies
                    sollicitudin dui.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="section" id="reference">
        <div className="container cc-reference">
          <div className="h4 mb-4 text-center title">References</div>
          <div className="card" data-aos="zoom-in">
            <div
              className="carousel slide"
              id="cc-Indicators"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  className="active"
                  data-target="#cc-Indicators"
                  data-slide-to={0}
                />
                <li data-target="#cc-Indicators" data-slide-to={1} />
                <li data-target="#cc-Indicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 cc-reference-header">
                      <img src="assets/images/reference-image-1.jpg" alt="" />
                      <div className="h5 pt-2">Aiyana</div>
                      <p className="category">CEO / WEBM</p>
                    </div>
                    <div className="col-lg-10 col-md-9">
                      <p>
                        {" "}
                        Habitasse venenatis commodo tempor eleifend arcu sociis
                        sollicitudin ante pulvinar ad, est porta cras erat
                        ullamcorper volutpat metus duis platea convallis, tortor
                        primis ac quisque etiam luctus nisl nullam fames. Ligula
                        purus suscipit tempus nascetur curabitur donec nam
                        ullamcorper, laoreet nullam mauris dui aptent facilisis
                        neque elementum ac, risus semper felis parturient
                        fringilla rhoncus eleifend.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 cc-reference-header">
                      <img src="assets/images/reference-image-2.jpg" alt="" />
                      <div className="h5 pt-2">Braiden</div>
                      <p className="category">CEO / Creativem</p>
                    </div>
                    <div className="col-lg-10 col-md-9">
                      <p>
                        {" "}
                        Habitasse venenatis commodo tempor eleifend arcu sociis
                        sollicitudin ante pulvinar ad, est porta cras erat
                        ullamcorper volutpat metus duis platea convallis, tortor
                        primis ac quisque etiam luctus nisl nullam fames. Ligula
                        purus suscipit tempus nascetur curabitur donec nam
                        ullamcorper, laoreet nullam mauris dui aptent facilisis
                        neque elementum ac, risus semper felis parturient
                        fringilla rhoncus eleifend.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 cc-reference-header">
                      <img src="assets/images/reference-image-3.jpg" alt="" />
                      <div className="h5 pt-2">Alexander</div>
                      <p className="category">CEO / Webnote</p>
                    </div>
                    <div className="col-lg-10 col-md-9">
                      <p>
                        {" "}
                        Habitasse venenatis commodo tempor eleifend arcu sociis
                        sollicitudin ante pulvinar ad, est porta cras erat
                        ullamcorper volutpat metus duis platea convallis, tortor
                        primis ac quisque etiam luctus nisl nullam fames. Ligula
                        purus suscipit tempus nascetur curabitur donec nam
                        ullamcorper, laoreet nullam mauris dui aptent facilisis
                        neque elementum ac, risus semper felis parturient
                        fringilla rhoncus eleifend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="section" id="contact">
        <div
          className="cc-contact-information"
          style={{ backgroundImage: 'url("assets/images/staticmap.png")' }}
        >
          <div className="container">
            <div className="cc-contact">
              <div className="row">
                <div className="col-md-9">
                  <div className="card mb-0" data-aos="zoom-in">
                    <div className="h4 text-center title">Contact Me</div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <form
                            action="https://formspree.io/your@email.com"
                            method="POST"
                          >
                            <div className="p pb-3">
                              <strong>Feel free to contact me </strong>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="fa fa-user-circle" />
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required="required"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="fa fa-file-text" />
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="Subject"
                                    placeholder="Subject"
                                    required="required"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="fa fa-envelope" />
                                  </span>
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="_replyto"
                                    placeholder="E-mail"
                                    required="required"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Your Message"
                                    required="required"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <p className="mb-0">
                            <strong>Address </strong>
                          </p>
                          <p className="pb-2">
                            An Giang, Viet Nam
                          </p>
                          <p className="mb-0">
                            <strong>Phone</strong>
                          </p>
                          <p className="pb-2">Hidden</p>
                          <p className="mb-0">
                            <strong>Email</strong>
                          </p>
                          <p>lmthong97@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container text-center">
      <a className="cc-facebook btn btn-link" href="https://www.facebook.com/minhthong2712/">
        <i className="fa fa-facebook fa-2x " aria-hidden="true" />
      </a>
      <a className="cc-twitter btn btn-link " href="https://www.linkedin.com/in/lmthong97/">
        <i className="fa fa-linkedin fa-2x " aria-hidden="true" />
      </a>
     
      <a className="cc-instagram btn btn-link" href="https://www.instagram.com/leminhthong97/">
        <i className="fa fa-instagram fa-2x " aria-hidden="true" />
      </a>
    </div>
    <div className="h4 title text-center">Le Minh Thong</div>
    <div className="h6 title text-center">THANK YOU!</div>

    <div className="text-center text-muted">
      <p>
        © Creative CV. All rights reserved.
        <br />
        Design -{" "}
        <a className="credit" href="/" target="_blank" rel="noreferrer" >
          TemplateFlip
        </a>
      </p>
    </div>
  </footer>

        </div>
    );
}

export default Home;