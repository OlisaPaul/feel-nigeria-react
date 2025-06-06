import carouselImg1 from "../assets/img/carousel-1.jpg";
import carouselImg2 from "../assets/img/carousel-2.jpg";
import carouselImg3 from "../assets/img/carousel-3.jpg";

const NavBarHeroCarousel = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-map-marker-alt me-3"></i>Feel Nigeria
          </h1>
          {/* <!-- <img src="src/assets/img/logo.png" alt="Logo"> --> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="services.html" className="nav-item nav-link">
              Services
            </a>
            <a href="packages.html" className="nav-item nav-link">
              Packages
            </a>
            <a href="blog.html" className="nav-item nav-link">
              Blog
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="destination.html" className="dropdown-item">
                  Destination
                </a>
                <a href="tour.html" className="dropdown-item">
                  Explore Tour
                </a>
                <a href="booking.html" className="dropdown-item">
                  Travel Booking
                </a>
                <a href="gallery.html" className="dropdown-item">
                  Our Gallery
                </a>
                <a href="guides.html" className="dropdown-item">
                  Travel Guides
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a href="" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
            Book Now
          </a>
        </div>
      </nav>

      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={carouselImg2} className="img-fluid" alt="Image"></img>
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Feel Nigeria
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    Let's tour The World Together!
                  </h1>
                  <p className="mb-5 fs-5">
                    Lets' show you the beautiful terrain of Nigeria,
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carouselImg1} className="img-fluid" alt="Image"></img>
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Feel Nigeria
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    Find Your Perfect Travel Guide
                  </h1>
                  <p className="mb-5 fs-5">
                    We make you feel @ home while enjoying your holiday in
                    Nigeria,
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carouselImg3} className="img-fluid" alt="Image"></img>
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Feel Nigeria
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    You Like To Go?
                  </h1>
                  <p className="mb-5 fs-5">
                    Let's wow you while showing you the beautiful landscapes of
                    Nigeria, the beautiful people and beautiful people.
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn bg-primary"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn bg-primary"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarHeroCarousel;
