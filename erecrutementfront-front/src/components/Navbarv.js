import React from "react";
// import logo from "../images/Group 381.png"
import logo from "../images/stafferLogo.png";
import style from "../styles/AddJob.module.css";
import { NavLink } from 'react-router-dom';



const Navbarv = () => {

  return (

    <NavLink to={'/home'} className={style.link}>
      <div className={style.all_logo}>
        <img src={logo} alt="Logo" className={style.logo} />
        <h1 className={style.logo_text}><span>Staff</span><span>er</span></h1>
      </div>
    </NavLink>
  )
}
export default Navbarv
