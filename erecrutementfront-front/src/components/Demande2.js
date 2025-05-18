import React, { useState } from "react";
import images from "../images/Group 392.png"
import icon1 from "../images/Lawyer.png"
import icon2 from "../images/Company.png"
import icon3 from "../images/Playlist.png"
import icon4 from "../images/Timesheet.png"
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Demande2 = (idDemandeur) => {
    idDemandeur = useParams();
    idDemandeur = idDemandeur.idDemandeur;
    console.log("idDemandeur", idDemandeur);


    const [titre, settitre] = useState("");
    const [dateDebut, setdateDebut] = useState("");
    const [dateFin, setdateFin] = useState("");
    const [pieceJointe, setpieceJointe] = useState("");
    const [nomEtablissement, setnomEtablissement] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            titre: titre,
            pieceJointe: pieceJointe,
            nomEtablissement: nomEtablissement,
            dateDebut: dateDebut,
            dateFin: dateFin,
        };

        fetch(`http://localhost:8082/msjobseeker/diplome/${idDemandeur}`, {
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
        // navigate("/demande d'emploie/3");
    };
    const handleChangetitre = (event) => {
        settitre(event.target.value);
    };
    const handleChangedateDebut = (event) => {
        // Convert the date format
        const date = new Date(dateDebut);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setdateDebut(event.target.value);

    };
    const handleChangedateFin = (event) => {
        const date = new Date(dateFin);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setdateFin(event.target.value);
    };
    const handleChangepieceJointe = (event) => {
        
        setpieceJointe(event.target.value);
    };
    const handleChangenomEtablissement = (event) => {
        setnomEtablissement(event.target.value);
    };
    


    return (
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Etape 03 : Ajouter Formation ou diplome</h3>

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
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Titre Frormation</h5>
                                                    <div class="col-md-8 col-lg-9 ">
                                                        <input type="text" class="form-control champs" maxLength={21} id="inputPassword" placeholder="Veuillez saisir le titre " required value={titre} onChange={handleChangetitre} />
                                                    </div>
                                                </div>

                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon3} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Niveau d'étude</h5>
                                                    <div class="col-md-8 col-lg-9">
                                                        <select class="form-select bordure txtv" id="validationCusto04" required >
                                                            <option selected disabled value="" >Choisissez votre niveau d'étude ...</option>
                                                            <option>Doctorat</option>
                                                            <option>Master 2 ,Ingeniorat BAC+5</option>
                                                            <option>Master 1,BAC+4</option>
                                                            <option>Licence BAC+3</option>
                                                            <option>Technicien Superieur BAC+2</option>
                                                            <option>Niveau Terminal</option>
                                                            <option>Niveau Secondaire</option>
                                                            <option>Non Diplomé(e)</option>
                                                            <option>Formation Professionnelle</option>
                                                            <option>Certificat</option>

                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please select a valid Statut.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon2} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Etablissement</h5>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control champs" maxLength={21} id="inputPassword" placeholder="Veuillez saisir le nom d'etablissement " required value={nomEtablissement} onChange={handleChangenomEtablissement} />
                                                    </div>
                                                </div>
                                                <div className="mb-5 row">
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
                                                <div class="row ">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
                                                    </div>
                                                    <div class="mb-3 col-lg-11 col-md-11 ">
                                                        <input class="form-control champs " type="file" id="formFileMultiple" style={{color:"#919191"}}  multiple  value={pieceJointe} onChange={handleChangepieceJointe}  accept="application/pdf"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="col-md-6 col-sm-12 mb-2 ">
                                                        <Link to="/demande d'emploie/1" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary px-5 " type="submit">Précédent</button>
                                                        </Link>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12  ">
                                                        <button class="btn btn-primary px-5" type="submit">Suivant</button>
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
export default Demande2 