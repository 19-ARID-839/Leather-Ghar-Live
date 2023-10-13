import React from "react";
import "./stylee.css";
// import {FontAwesomeIcon} from '@fortawesome/free-regular-svg-icons';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const SmallScreen = () => {
  return (
    <div>
      <div className="Small-main   d-lg-none d-md-none d-sm-block ">
        <div className="scontainer-1">
          <h1>LEATHERGHAR</h1>
        </div>
        <div className="scontainer-2">
          <p>Shipping All Over Pakistan</p>
        </div>
        {/* Collasping Menu */}
        <div className="scontainer-3">
          <div className="row mh-4">
            <Navbar expand="lg sm">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="toggle white-button"
              >
                {/* <FontAwesomeIcon icon="fa-thin fa-bars" /> */}
              </Navbar.Toggle>
              <div className="cart">
                <div className="col-sm-2">
                  <button className="brr">
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png" />
                  </button>
                </div>
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="er" href="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="er" href="/catalog">
                    Catalog
                  </Nav.Link>
                  <Nav.Link className="er" href="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

          {/* Cart Button */}
        </div>
      </div>
    </div>
  );
};

export default SmallScreen;
