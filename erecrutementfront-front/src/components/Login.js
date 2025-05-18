import React, { useState } from "react";
import images from "../images/Group 7 (1).png"
import icon1 from "../images/Lawyer.png"
import icon2 from "../images/Company.png"
import icon4 from "../images/Timesheet.png"
import icon5 from "../images/Tear-Off Calendar.png"

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { countries } from './paysOptions';


const Login = () => {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");

    const navigate = useNavigate();
    const [user, setUser] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
        }



        fetch("http://127.0.0.1:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data.user);
                setemail(data.user.email);
                const id = data.user.id;
                console.log("data", data);

                if (data.user.role === "super_admin" || data.user.role === "admin") {
                    setTimeout(() => {
                        navigate('/');
                    }, 20000);
                } else if (data.user.role === "Demandeur") {
                    setTimeout(() => {
                        navigate(`/HomeDemandeur/${id}`);
                    }, 2000);
                }
                else if (data.user.role === "Employeur") {
                    setTimeout(() => {
                        navigate(`/EmployerHome/${id}`);
                    }, 2000);
                } else {
                    console.log("erreur !");
                }
            })
            .catch((error) => {
                console.error("nnnnnnnnnnnnn", error);
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
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} > Connection A Votre Compte</h3>

                <div className="row d-flex justify-content-right align-items-right h-100">
                    <div className="col ">
                        <div className="card" style={{ borderColor: "white" }}>

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
                                                    <button class="btn btn-primary px-5 " type="submit">  login  </button>
                                                </div>
                                                <p
                                                    className="py-4 mt-1 poppins"
                                                >
                                                    Don't have an account ?{" "}
                                                    <Link to="/SignupRole" style={{ color: "#3795BD" }}>
                                                        Sign up
                                                    </Link>
                                                </p>
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
    )
}
export default Login