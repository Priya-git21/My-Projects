import React, { useState } from "react";
import "./NavBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {

  const [title, setTitleApp] = useState(null);
  const heading = ["Text Formatter", "About Us"];

  React.useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setTitleApp("Text Formatter");
        break;
      case "/about":
        setTitleApp("About Us");
        break;
    }
  }, [window.location.pathname]);

  const changeTitle = (value) => {

    setTitleApp(heading.at(value));
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top bg" data-bs-scroll="true">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={process.env.PUBLIC_URL + '/logoTextUtil.png'} alt="" height="80px" width="auto" />
          </a>
          <center>
            <h1 className="h1" style={{ color: "white" }}>
              {title}
            </h1>
          </center>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark bg "
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header" >
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Priya's Projects
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={`/`} className="nav-link active" aria-current="page" onClick={event => changeTitle('0')}>
                    Text Formatter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/about`} className="nav-link active" aria-current="page" onClick={event => changeTitle('1')}>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

NavBar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};