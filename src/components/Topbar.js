import React from "react";
import { Form, Button } from "react-bootstrap";
import "./stylee.css";

import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    // d-sm-block

    <div className="main navbar-expand-lg  d-none d-md-block">
      <div className="main-container-top">
        <div className="container1">
          <div className="Brand-name" href="#home">
            {" "}
            LEATHERGHAR{" "}
          </div>
        </div>
        <div className="container2">
          <div className="navtoptext">
            <p>Shopping All over Pakistan</p>
          </div>
          <div className="navitem">
            <Form.Control
              style={{ width: "50%" }}
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
            <Button className="ah" variant="secondary">
              CART{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="main-container-2" id="collapseExample">
        <Link to="/home">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Topbar;
