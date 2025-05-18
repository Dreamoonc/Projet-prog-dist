import React from "react";
import images from "../images/Group 393.png"
import icon1 from "../images/Lawyer.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CompetenceNom from './competenceOptions';



const Demande3 = () => {

    const [nom, setnom] = useState("");

    const navigate = useNavigate();
    const [divs, setDivs] = useState([]);
    const competenceOptions = Object.values(CompetenceNom);

    const ajouterDiv = () => {
        const newDiv = {
            id: Date.now(), // identifiant unique généré avec la date courante
            content: nom
        };
        setDivs([...divs, newDiv]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            nom: nom,
        };
        fetch("http://localhost:8986/competences/1", {
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
        ajouterDiv();


    };
    const handleChangenom = (event) => {
        setnom(event.target.value);
    };
    const supprimerDiv = (nom) => {
        // appel de l'API pour supprimer la compétence correspondante
        fetch(`http://localhost:8986/competences/${nom}`, {
            method: 'DELETE'
        })
            .then(() => setDivs(divs.filter(div => div.content !== nom)))
            .catch(error => console.error(error));
    };
    

    return (
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Etape 04 : Ajouter Une Compétence</h3>

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
                                            <h3 className="py-3" style={{ color: "#3795BD", fontFamily: "robbin" }} >Compétences</h3>
                                            <p className="mb-5">
                                                Ajoutez les compétences techniques que vous avez acquis au long de vos formations et expériences, ainsi que vos qualités humaines. Ceci permet aux recruteurs de mieux vous connaître.
                                            </p>

                                            <form class="row  needs-validation" novalidate onSubmit={handleSubmit}>
                                                <div class="row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Compétences</h5>
                                                    <div class="col-md-8 col-lg-9  ">
                                                        <select class="form-select bordure select-dropdown " id="validationCustom04" required value={nom} onChange={handleChangenom} >
                                                            <option selected disabled value="">Choisissez Vos Compétences...</option>
                                                            {Object.values(CompetenceNom).map((option, index) => (
                                                                <option key={index} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}

                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="py-3 mb-2">
                                                    <button class="btn btnv btn-primary px-5 mb-2 " >Ajouter</button>
                                                </div>
                                                <div class="mb-4 px-5 row" >
                                                    {divs.map(div => (
                                                        <div className="col-lg-3 col-md-4 py-1 champs champsb cptc" key={div.id}>
                                                            <div className="row txthv txtv">

                                                                <span className="col-lg-9 "> {div.content}</span>

                                                                <div class=" col-lg-1 px-1 " onClick={() => supprimerDiv(div.content)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x txthv" viewBox="0 0 16 16">
                                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="row">
                                                    <div class="col-md-6 col-sm-12 mb-2">
                                                        <Link to="/demande d'emploie/2" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary px-5 " type="submit">Précédent</button>
                                                        </Link>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12  ">
                                                        <Link to="/demande d'emploie/4" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary px-5" type="submit" >Suivant</button>
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
export default Demande3