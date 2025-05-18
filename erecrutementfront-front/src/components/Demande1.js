import React, { useState, useEffect } from "react";
import images from "../images/Group 391.png"
import icon1 from "../images/Lawyer.png"
import icon2 from "../images/Company.png"
import icon3 from "../images/Playlist.png"
import icon4 from "../images/Timesheet.png"
import icon5 from "../images/Permanent Job.png"
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Demande1 = (idDemandeur) => {
    idDemandeur = useParams();
    idDemandeur = idDemandeur.idDemandeur;
    console.log("idDemandeur", idDemandeur);

    const [titrePoste, settitrePoste] = useState("");
    const [dateDebut, setdateDebut] = useState("");
    const [dateFin, setdateFin] = useState("");
    const [description, setdescription] = useState("");
    const [nomEntreprise, setnomEntreprise] = useState("");
    const [metier, setmetier] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            titrePoste: titrePoste,
            dateDebut: dateDebut,
            dateFin: dateFin,
            description: description,
            nomEntreprise: nomEntreprise,
            metier: metier,
        };

        fetch(`http://localhost:8082/msjobseeker/experience-professionnelle/${idDemandeur}`, {
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
        navigate(`/demande d'emploie/2/${idDemandeur}`);
    };
    const handleChangetitrePoste = (event) => {
        settitrePoste(event.target.value);
    };
    const handleChangedateDebut = (event) => {
        setdateDebut(event.target.value);
    };
    const handleChangedateFin = (event) => {
        setdateFin(event.target.value);
    };
    const handleChangedescription = (event) => {
        setdescription(event.target.value);
    };
    const handleChangenomEntreprise = (event) => {
        setnomEntreprise(event.target.value);
    };
    const handleChangemetier = (event) => {
        setmetier(event.target.value);
    };

    return (
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Etape 02 : Ajouter Une Experiance</h3>

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
                                            <form class="row  needs-validation" novalidate onSubmit={handleSubmit} >
                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Titre du poste</h5>
                                                    <div class="col-md-8 col-lg-9 ">
                                                        <input type="text" class="form-control champs" maxLength={20} id="inputPassword" placeholder="Veuillez saisir le titre" required value={titrePoste} onChange={handleChangetitrePoste} />
                                                    </div>
                                                </div>

                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon2} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Nom d'entreprise</h5>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control champs" maxLength={20} id="inputPassword" placeholder="Veuillez saisir votre niveau" required value={nomEntreprise} onChange={handleChangenomEntreprise} />
                                                    </div>
                                                </div>

                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon5} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Métier</h5>
                                                    <div class="col-md-8 col-lg-9">
                                                        <select class="form-select bordure txtv" id="validationCusto04" required value={metier} onChange={handleChangemetier} >
                                                            <option selected disabled value="" >Choose...</option>

                                                            <option>PROFESSEUR</option>
                                                            <option>AVOCAT</option>
                                                            <option>MEDECIN</option>
                                                            <option>INGENIEUR</option>


                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please select a valid Statut.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-3 row">
                                                    <div className="col">
                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5 col-lg-4  col-form-label txt">Date Début</h5>
                                                            <div class=" col-lg-6">
                                                                <input type="Date" class="form-control champs" id="inputPassword" placeholder="Veuillez saisir la date " required value={dateDebut} onChange={handleChangedateDebut} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">

                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5  col-lg-3  col-form-label txt">Date Fin</h5>
                                                            <div class="col-lg-7">
                                                                <input type="Date" class="form-control champs" id="inputPassword" placeholder="Veuillez saisir la date fin" required value={dateFin} onChange={handleChangedateFin} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-5 row " >
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon3} alt="My Image" className="img-fluid " style={{ width: "40px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Description </h5>
                                                    <div class="col-md-8 col-lg-9" >
                                                        <textarea type="text" rows="3" maxLength={150} class="form-control champs" id="inputPassword" placeholder="Veuillez saisir une décrire votre experiance" required value={description} onChange={handleChangedescription} />
                                                    </div>
                                                </div>
                                               
                                                <div className="row mb-2">
                                                <div class="col-md-6 col-sm-12 mb-2">
                                                        <Link to="/demande d'emploie/0" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary px-5 " type="submit">Précédent</button>
                                                        </Link>
                                                    </div>

                                                    <div class="col-md-6 col-sm-12 ">
                                                        <button class="btn btn-primary px-5 " >  Suivant </button>
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
export default Demande1