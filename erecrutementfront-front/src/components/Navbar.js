import React from "react";
import logo from "../images/Group 381.png"
import { Link } from 'react-router-dom';
import notification from "../images/Alarm.png"
import line from "../images/Line 3.png"


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-lg-2 col-md-2 py-2">
      <Link to="/" className="row" >
        <img src={logo} alt="My Image" className="img-fluid " style={{ width: "160px" }} />
      </Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto col-lg-10  list d-flex  justify-content-center txtb  ">
          <li className="nav-item active col-lg-1">
          <Link to="/" className="row" >
            <a className="nav-link">Home</a>
          </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Find Jobs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hire Talents</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <ul className="navbar-nav liste  col-lg-2 mr-auto d-flex  justify-content-center">
          <li>
            <img src={notification} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
          </li>
          <li>

          </li>
        </ul>
      </div>
      
    </nav>
  )
}
export default Navbar
/*
<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

        </ul>

      </div>

 */