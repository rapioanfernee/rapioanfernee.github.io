import React from "react";
import Swiper from "react-id-swiper";

import { Button } from "reactstrap";

import "./Projects.scss";
import "./ProjectsTile.scss";

const Projects = props => {
  const paramsParent = {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  const paramsChild = {
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return (
    <>
      <div className="projects d-none d-lg-flex" ref={props.sectionRef}>
        <span>Projects</span>
        <Swiper {...paramsParent}>
          <div className="project">
            <Swiper {...paramsChild}>
              <div className="project-photo-container">
                <img src="/portfolio/op-home.png" alt="op"></img>
              </div>
              <div className="project-photo-container">
                <img src="/portfolio/op-1.png" alt="op"></img>
              </div>
              <div className="project-photo-container">
                <img src="/portfolio/op-2.png" alt="op"></img>
              </div>
            </Swiper>
            <div className="project-title">OnePropertee</div>
            <p className="project-subtitle">
              A Real Estate portal made closely with the country's top sellers.
            </p>
            <small>Role: Front-End, UI</small>
            <small>
              Technologies: ReactJS, HTML, CSS, SCSS, JavaScript, Google Maps
              API, Bootstrap
            </small>
            <div className="project-buttons mt-3">
              <a href="https://onepropertee.com">
                <Button color="secondary" size="large">
                  Visit Page
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <Swiper {...paramsChild}>
              <div className="project-photo-container">
                <img src="/portfolio/ilove-home.png" alt="ilove"></img>
              </div>
              <div className="project-photo-container">
                <img src="/portfolio/ilove-1.png" alt="ilove"></img>
              </div>
              <div className="project-photo-container">
                <img src="/portfolio/ilove-2.png" alt="ilove"></img>
              </div>
            </Swiper>
            <div className="project-title">
              Innovation Love (Company Website)
            </div>
            <p className="project-subtitle">
              Human-Centered innovations solving everyday problems
            </p>
            <small>Role: Front-End UI</small>
            <small>
              Technologies: ReactJS, Context, HTML, CSS, SCSS, JavaScript
            </small>
            <div className="project-buttons mt-3">
              <a href="https://innovationlove.ph">
                <Button color="secondary" size="large">
                  Visit Page
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <Swiper {...paramsChild}>
              <div className="project-photo-container">
                <img src="/portfolio/w-home.png" alt="w"></img>
              </div>
              <div className="project-photo-container">
                <img src="/portfolio/w-1.png" alt="w"></img>
              </div>
              <div className="project-photo-container">
                <img src="/portfolio/w-2.png" alt="w"></img>
              </div>
            </Swiper>
            <div className="project-title">Weather Forecast App</div>
            <p className="project-subtitle">
              A React Application for Monitoring Weather Conditions on a
              Specific Area
            </p>
            <small>Role: Front-End, UI, Owner</small>
            <small>
              Technologies: ReactJS, Redux, HTML, CSS, SCSS, JavaScript, Google
              Maps API
            </small>
            <div className="project-buttons mt-3">
              <a href="https://rapioanfernee.github.io/weatherforecastapp/">
                <Button color="secondary" size="large">
                  Visit Page
                </Button>
              </a>
              <a
                className="ml-3"
                href="https://github.com/rapioanfernee/weatherforecastapp/"
              >
                <Button color="secondary" size="large">
                  View Repository
                </Button>
              </a>
            </div>
          </div>
        </Swiper>
      </div>
      {/* Divider */}
      <div
        className="projects d-lg-none d-flex flex-column align-items-center  pt-5 pt-lg-0"
        ref={props.sectionRef}
      >
        <span>Projects</span>

        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom border-top border-secondary">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/portfolio/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/portfolio/op-home.png" alt="op"></img>
            </div>
            <div className="project-photo-container">
              <img src="/portfolio/op-home.png" alt="op"></img>
            </div>
          </Swiper>
          <div className="project-title pt-0">OnePropertee</div>
          <p className="project-subtitle">
            A Real Estate portal made closely with the country's top sellers.
          </p>
          <small>Role: Front-End, UI</small>
          <small>
            Technologies: ReactJS, HTML, CSS, SCSS, JavaScript, Google Maps API
          </small>
          <div className="project-buttons mt-3">
            <a href="https://onepropertee.com">
              <Button color="secondary" size="large">
                Visit Page
              </Button>
            </a>
          </div>
        </div>
        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom  border-secondary">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/portfolio/ilove-home.png" alt="ilove"></img>
            </div>
            <div className="project-photo-container">
              <img src="/portfolio/ilove-1.png" alt="ilove"></img>
            </div>
            <div className="project-photo-container">
              <img src="/portfolio/ilove-2.png" alt="ilove"></img>
            </div>
          </Swiper>
          <div className="project-title pt-0">
            Innovation Love (Company Website)
          </div>
          <p className="project-subtitle">
            Human-Centered innovations solving everyday problems
          </p>
          <small>Role: Front-End, UI</small>
          <small>
            Technologies: ReactJS, Context, HTML, CSS, SCSS, JavaScript
          </small>
          <div className="project-buttons mt-3">
            <a href="https://innovationlove.ph">
              <Button color="secondary" size="large">
                Visit Page
              </Button>
            </a>
          </div>
        </div>
        <div className="project pb-4 d-flex flex-column align-items-center text-center border-bottom border-secondary">
          <Swiper {...paramsChild}>
            <div className="project-photo-container">
              <img src="/portfolio/w-home.png" alt="w"></img>
            </div>
            <div className="project-photo-container">
              <img src="/portfolio/w-1.png" alt="w"></img>
            </div>
            <div className="project-photo-container">
              <img src="/portfolio/w-2.png" alt="w"></img>
            </div>
          </Swiper>
          <div className="project-title pt-0">Weather Forecast App</div>
          <p className="project-subtitle">
            A React Application for Monitoring Weather Conditions on a Specific
            Area
          </p>
          <small>Role: Front-End, UI</small>
          <small>
            Technologies: ReactJS, Redux, HTML, CSS, SCSS, JavaScript, Google
            Maps API
          </small>
          <div className="project-buttons mt-3">
            <a href="https://rapioanfernee.github.io/weatherforecastapp/">
              <Button color="secondary" size="large">
                Visit Page
              </Button>
            </a>
            <a
              className="ml-3"
              href="https://github.com/rapioanfernee/weatherforecastapp/"
            >
              <Button color="secondary" size="large">
                View Repository
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
