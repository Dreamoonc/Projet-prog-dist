import React, { useState } from "react";
import images from "../images/Group 7 (1).png"
import icon1 from "../images/Lawyer.png"
import icon2 from "../images/Company.png"
import icon4 from "../images/Timesheet.png"
import icon5 from "../images/Tear-Off Calendar.png"

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { countries } from './paysOptions';
import { NavLink } from "react-router-dom";
import logo from "../images/stafferLogo.png";
import style from "../styles/AddJob.module.css";


const Signupdem = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");

    const navigate = useNavigate();
    const [user, setUser] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const dataa = {
            email: email,
            password: password,
            nom: nom,
            prenom: prenom,
        };


        fetch("http://127.0.0.1:5000/api/auth/register/demandeur", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataa),
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data.user);
                console.log("data", data);
                let idDemandeur = data.demandeur.id;
                console.log("idDemandeur", idDemandeur);

                navigate(`/demande d'emploie/0/${idDemandeur}`);

                //   if (data.user.active === "true" ) {
                //     setTimeout(() => {
                //       navigate('/signup');
                //     }, 20000);
                // }else {
                //     console.log("erreur !");
                //   }
            })
            .catch((error) => {
                console.error("erreur", error);
            });

    };











    const handleChangeemail = (event) => {
        setemail(event.target.value);
    };
    const handleChangepassword = (event) => {
        setpassword(event.target.value);
    };
    const handleChangeNom = (event) => {
        setNom(event.target.value);
    };

    const handleChangePrenom = (event) => {
        setPrenom(event.target.value);
    };


    return (
        <>
            <link
                href="https://fonts.googleapis.com/css?family=Poppins"
                rel="stylesheet"
            ></link>
            <NavLink to={"/home"} className={style.link}>
                <div className={style.all_logo}>
                    <img src={logo} alt="Logo" className={style.logo} />
                    <h1 className={style.logo_text}>
                        <span>Staff</span>
                        <span>er</span>
                    </h1>
                </div>
            </NavLink>
            <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
                <div className="col c" >
                    <h3 className="py-4 welcomText_" style={{ color: "#3795BD", fontWeight: "bold" }} > Inscription Demandeur</h3>

                    <div className="row d-flex justify-content-right align-items-right h-100">
                        <div className="col ">
                            <div className="card" style={{ borderColor: "white" }}>
                                {/* <div className="card-body">
                                <div className="d-flex text-black justify-content-center">
                                    <div className="flex">
                                        <img src={images} alt="My Image" className="img-fluid " style={{ width: "500px" }} />
                                    </div>

                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className=" py-3 px-5  d-flex  justify-content-center">
                        <div className="col px-5 d-flex justify-content  align-items h-100">
                            <div className="col ">
                                <div className="card mb-3" style={{ borderRadius: "15px", borderColor: "#4E31AA" }}>
                                    <div className="card-body p-4">
                                        <div className="d-flex text-black">

                                            <div className="flex-grow-1 ms-3 mt-3">
                                                <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                                                    <div className="mb-3 row">
                                                        <div className="col">
                                                            <div class="row">
                                                                <div className="col-lg-2 col-md-2 py-2">
                                                                    <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                                </div>
                                                                <h5 for="inputPassword" class="col-md-5 col-lg-4  col-form-label txt">Nom</h5>
                                                                <div class=" col-lg-6">
                                                                    <input type="text" class="form-control champs" maxLength={20} id="validationCustom01" required value={nom} onChange={handleChangeNom} placeholder="Veuillez saisir votre nom" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col">

                                                            <div class="row">
                                                                <div className="col-lg-2 col-md-2 py-2">
                                                                    <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                                </div>
                                                                <h5 for="inputPassword" class="col-md-5  col-lg-4  col-form-label txt">Prenom</h5>
                                                                <div class=" col-lg-6">
                                                                    <input type="text" class="form-control champs" maxLength={20} id="validationCustom02" required value={prenom} onChange={handleChangePrenom} placeholder="Veuillez saisir votre prenom" />
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 row">
                                                        <div className="col-lg-1 col-md-1">
                                                            <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                        </div>
                                                        <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Email</h5>
                                                        <div class="col-md-8 col-lg-9 ">
                                                            <input type="text" class="form-control champs" id="validationCustom01" required value={email} onChange={handleChangeemail} placeholder="Veuillez saisir votre email" />
                                                        </div>
                                                    </div>

                                                    <div class="mb-3 row">
                                                        <div className="col-lg-1 col-md-1">
                                                            <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                        </div>
                                                        <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">password</h5>
                                                        <div class="col-md-8 col-lg-9 ">
                                                            <input type="password" class="form-control champs" id="validationCustom01" required value={password} onChange={handleChangepassword} placeholder="Veuillez saisir votre password" />
                                                        </div>
                                                    </div>


                                                    <div class="col-12">
                                                        <button class="btn btn-primary px-5 " type="submit">  Enregistrer  </button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default Signupdem