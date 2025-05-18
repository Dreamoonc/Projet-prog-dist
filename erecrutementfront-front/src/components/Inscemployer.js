import React, { useState } from "react";
import images from "../images/Group 7 (1).png"
import icon1 from "../images/Lawyer.png"
import icon2 from "../images/Company.png"
import icon4 from "../images/Timesheet.png"
import icon5 from "../images/Tear-Off Calendar.png"

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { countries } from './paysOptions';



const Inscemployer = () => {
    
    const [phone, setphone] = useState("");
    const [entreprise, setentreprise] = useState("");
    const [fax, setfax] = useState("");
    const [wilaya, setwilaya] = useState("");
    const [adresse, setadresse] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [numeroCommerial, setnumeroCommerial] = useState("");


   
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            entreprise:entreprise,
            phone: phone,
            fax:fax,
            wilaya:wilaya,
            adresse:adresse,
            phoneNumber:phoneNumber,
            numeroCommerial:numeroCommerial,
            
        };

        fetch("http://localhost:8080/Employers/update/33", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log("inscription effectuée avec succès !");
            })
            .catch((error) => {
                console.error("Erreur lors de la mise à jour :", error);
            });
        navigate("/home/employeur");

    };

    const handleChangephone = (event) => {
        setphone(event.target.value);
    };

    const handleChangeentreprise = (event) => {
        setentreprise(event.target.value);
    };

    const handleChangewilaya = (event) => {
        setwilaya(event.target.value);
    };
    const handleChangefax = (event) => {
        setfax(event.target.value);
    };
    const handleChangeadresse = (event) => {
        setadresse(event.target.value);
    };
    const handleChangenumeroCommerial = (event) => {
        setnumeroCommerial(event.target.value);
    };



    return (
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} > Inscription employeur</h3>

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
                                                
                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon2} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Num Telephone</h5>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="tel" 
                                                        pattern="[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}" 
                                                        maxLength={10} 
                                                        class="form-control champs" 
                                                        id="validationCustomUsername" 
                                                        aria-describedby="inputGroupPrepend" 
                                                        required 
                                                        value={phone} 
                                                        onChange={handleChangephone} 
                                                        placeholder="Veuillez saisir le numero" />
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <div className="col">
                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5  col-lg-4  col-form-label txt">Entreprise</h5>
                                                            <div class=" col-lg-6">
                                                                <input type="text" class="form-control champs" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={entreprise} onChange={handleChangeentreprise} placeholder="Veuillez saisir le nom" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">

                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5  col-lg-2  col-form-label txt">Fax</h5>
                                                            <div class=" col-lg-8">
                                                                <input type="number" class="form-control champs" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={fax} onChange={handleChangefax} placeholder="Veuillez saisir le numero" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <div className="col">
                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5 col-lg-4  col-form-label txt">Pays</h5>
                                                            <div class=" col-lg-6">

                                                                <select class="form-select bordure select-dropdown " id="validationCustom04" required value={adresse} onChange={handleChangeadresse}>
                                                                    <option value="">Sélectionner un pays</option>
                                                                    {countries.map((country, index) => (
                                                                        <option key={index} value={country.name}>
                                                                            {country.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">

                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5  col-lg-2  col-form-label txt">Ville</h5>
                                                            <div class="col-lg-8">


                                                                <select class="form-select bordure select-dropdown" id="validationCustom02" required value={wilaya} onChange={handleChangewilaya} disabled={!adresse}>
                                                                    <option value="">Sélectionner une ville</option>
                                                                    {adresse &&
                                                                        countries
                                                                            .find((country) => country.name === adresse)
                                                                            .cities.map((city, index) => (
                                                                                <option key={index} value={city}>
                                                                                    {city}
                                                                                </option>
                                                                            ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Num Commerial</h5>
                                                    <div class="col-md-8 col-lg-9 ">
                                                        <input type="number" class="form-control champs" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={numeroCommerial} onChange={handleChangenumeroCommerial} placeholder="Veuillez saisir le numero Commerial" />


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
    )
}
export default Inscemployer