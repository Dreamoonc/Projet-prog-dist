import React, { useEffect } from "react";
import talent from "../images/lookingfortalent.svg";
import emploi from "../images/kooking for job.png";
import icon4 from "../images/Timesheet.png";
import { Link } from "react-router-dom";
import logo from "../images/stafferLogo.png";
import style from "../styles/AddJob.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Role = () => {
    const [pieceJointe, setpieceJointe] = useState("");
    const [selectedRole, setSelectedRole] = useState("demandeur"); // Initialize with "demandeur"

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            pieceJointe: pieceJointe,
        };
        // Rest of the code
    };

    const handleChangepieceJointe = (event) => {
        setpieceJointe(event.target.value);
    };

    useEffect(() => {
        const job = document.getElementById("job");
        const talent = document.getElementById("talent");

        function listen() {
            job.addEventListener("click", function () {
                job.classList.add("active");
                talent.classList.remove("active");
                setSelectedRole("demandeur"); // Set selected role to "demandeur"
            });

            talent.addEventListener("click", function () {
                talent.classList.add("active");
                job.classList.remove("active");
                setSelectedRole("employeur"); // Set selected role to "employeur"
            });
        }

        listen();
    }, []);

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

            <div
                className="container py-4 "
                style={{ maxWidth: "1200px", textAlign: "center", marginTop: "-15px" }}
            >
                <div className="col c">
                    <h3 className="mt-4 welcomText_">Que cherchez-vous?</h3>

                    <div className="py-3 px-5  d-flex  justify-content-center">
                        <div className="col px-5 d-flex justify-content  align-items h-100">
                            <div className="col ">
                                <div className="card-body mt-4">
                                    <div className="d-flex text-black">
                                        <div className="flex-grow-1 ms-3">
                                            <form className="row  needs-validation" novalidate onSubmit={handleSubmit} >
                                                <div className="row mb-3">
                                                    
                                                    <div className="col">
                                                        <div
                                                            className={`container purple-border d-flex align-items-center justify-content-center role ${selectedRole === "employeur" ? "active" : ""
                                                                }`}
                                                            style={{ width: "370px", height: "250px" }}
                                                            id="job"
                                                            onClick={() => setSelectedRole("employeur")} // Added onClick event handler
                                                        >
                                                            <div className="row">
                                                                <h4 className="col mt-5 font-weight-bolder poppins">
                                                                    Rcherche de talents
                                                                </h4>
                                                                <img
                                                                    src={talent}
                                                                    className="col "
                                                                    alt="..."
                                                                    style={{ width: "200px" }}
                                                                />
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div
                                                            className={`container purple-border d-flex align-items-center justify-content-center role ${selectedRole === "demandeur" ? "active" : ""
                                                                }`}
                                                            style={{ width: "370px", height: "250px" }}
                                                            id="talent"
                                                            onClick={() => setSelectedRole("demandeur")} // Added onClick event handler
                                                        >
                                                             <div className="row">
                                                                <h4 className="col mt-5 font-weight-bolder poppins">
                                                                    Recherche d'emplois
                                                                </h4>
                                                                <img
                                                                    src={emploi}
                                                                    className="col "
                                                                    alt="..."
                                                                    style={{ width: "200px" }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div class="col-md-6 col-sm-12 mx-auto poppins">
                                                        <Link
                                                            to={`/signup/${selectedRole}`} // Use selectedRole variable in the link
                                                            style={{ color: "#3795BD" }}
                                                        >
                                                            <button
                                                                class="btn btn-primary btnv px-5 py-2 btn-sou "
                                                                type="submit"
                                                            >
                                                                {selectedRole === "demandeur"
                                                                    ? "S'inscrire en tant que demandeur d'emloi"
                                                                    : "S'inscrire en tant que employeur"}
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                            <p
                                                className="py-4 mt-1 poppins"
                                            >
                                                Already have an account ?{" "}
                                                <Link to="/login" style={{ color: "#3795BD" }}>
                                                    Log in
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Role;
