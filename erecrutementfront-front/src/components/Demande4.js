import React from "react";
import images from "../images/Group 394.png"
import icon4 from "../images/Timesheet.png"

import { Link } from 'react-router-dom';
import { useState } from 'react';



const Demande4 = () => {
    const [pieceJointe, setpieceJointe] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            pieceJointe:pieceJointe,
        };

        fetch("http://localhost:8082/diplome/1", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log("creation effectuée avec succès !");
            })
            .catch((error) => {
                console.error("Erreur lors de la creation :", error);
            });
    };
    const handleChangepieceJointe = (event) => {
        setpieceJointe(event.target.value);
    };
   

    return (
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Etape 05 : Ajouter Un CV</h3>

                <div className="row d-flex justify-content-right align-items-right h-100">
                    <div className="col ">
                        <div className="card" style={{ borderColor: "white" }}>
                            <div className="card-body">
                                <div className="d-flex text-black justify-content-center">
                                    <div className="flex">
                                        <img src={images} alt="My Image" className="img-fluid " style={{ width: "500px" }} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" py-3 px-5  d-flex  justify-content-center">
                    <div className="col px-5 d-flex justify-content  align-items h-100">
                        <div className="col ">
                            <div className="card mb-3" style={{ borderRadius: "15px", borderColor: "#4E31AA" }}>
                                <div className="card-body p-4">
                                    <div className="d-flex text-black">

                                        <div className="flex-grow-1 ms-3">
                                            <h4 className="py-3 txt" style={{ fontFamily: "robbin" }} >Déposer votre CV en piéce jointe </h4>

                                            <form class="row  needs-validation" novalidate  >
                                                <div class="row py-3 mb-4">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
                                                    </div>
                                                    <div class="mb-3 col-lg-11 col-md-11 ">
                                                        <input class="form-control champs " type="file" id="formFileMultiple" style={{color:"#919191"}}  multiple  value={pieceJointe} onChange={handleChangepieceJointe} />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div class="col-md-6 col-sm-12 mb-2">
                                                        <Link to="/demande d'emploie/3" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary px-5 " type="submit">Précédent</button>
                                                        </Link>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12  ">
                                                        <Link to="" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary px-5" type="submit"  onClick={handleSubmit}>Enregistrer</button>
                                                        </Link>
                                                    </div>
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
export default Demande4
