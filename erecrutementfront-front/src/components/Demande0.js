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
import { useParams } from 'react-router-dom';


const Demande0 = (idDemandeur) => {

    idDemandeur = useParams();
    idDemandeur = idDemandeur.idDemandeur;
    console.log("idDemandeur", idDemandeur);
   
    const [numeroTel, setnumeroTel] = useState("");
    const [nombreEnfants, setnombreEnfants] = useState("");
    const [situationFamiliale, setsituationFamiliale] = useState("");
    const [codePostal, setcodePostal] = useState("");
    // const [pays, setpays] = useState("");
    // const [ville, setville] = useState("");
    // const [rue, setrue] = useState("");
    const [sexe, setsexe] = useState("");
    const [dateDeNaissance, setdateDeNaissance] = useState("");
    const [handicap, sethandicap] = useState("");
   

    const navigate = useNavigate();

    

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
           
            numeroTel: numeroTel,
            nombreEnfants: nombreEnfants,
            situationFamiliale: situationFamiliale,
            codePostal: codePostal,
            // adresse: {
            //     pays: pays,
            //     ville: ville,
            //     rue: rue,
            // },
            dateDeNaissance: dateDeNaissance,
            sexe: sexe,
            handicap: handicap,
        };

        fetch(`http://localhost:8082/msjobseeker/demandeur/update/${idDemandeur}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log("inscription effectuée avec succès !");
                console.log("data", data);
            })
            .catch((error) => {
                console.error("Erreur lors de la mise à jour :", error);
            });
       navigate(`/demande d'emploie/1/${idDemandeur}`);

    };
    
   
    const handleChangenumeroTel = (event) => {
        setnumeroTel(event.target.value);
    };
    const handleChangesexe = (event) => {
        setsexe(event.target.value);
    };
    const handleChangesituationFamiliale = (event) => {
        setsituationFamiliale(event.target.value);
    };


    const handleChangedateDeNaissance = (event) => {
        
        setdateDeNaissance(event.target.value);
    };
    const handleChangehandicap = (event) => {
        sethandicap(event.target.value);
    };
    // const handleChangepays = (event) => {
    //     setpays(event.target.value);
    //     setville('');
    // };
    // const handleChangeville = (event) => {
    //     setville(event.target.value);
    // };


    return (
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Etape 01 : Informations personnelles</h3>

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

                                        <div className="flex-grow-1 ms-3 mt-3">
                                            <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                                            <div class="mb-3 row">
                                                   

                                               

                                              

                                                

                                                <div className="mb-3 row">
                                                    <div className="col">
                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5 col-lg-4  col-form-label txt">Telephone</h5>
                                                            <div class=" col-lg-6">
                                                                <input type="tel" pattern="[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}" class="form-control champs" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={numeroTel} onChange={handleChangenumeroTel} placeholder="Veuillez saisir le numero" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">

                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon5} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5  col-lg-4  col-form-label txt">Date Naissance</h5>
                                                            <div class=" col-lg-6">
                                                                <input type="Date" class="form-control champs" id="validationCustom01" required value={dateDeNaissance} onChange={handleChangedateDeNaissance} placeholder="Veuillez saisir" />
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
                                                            <h5 for="inputPassword" class="col-md-5  col-lg-4  col-form-label txt">sexe</h5>
                                                            <div className="col-lg-6">
                                                                <select class="form-select bordure " id="validationCustom04" required value={sexe} onChange={handleChangesexe} >
                                                                    <option selected disabled value="">Choose...</option>
                                                                    <option>Femme</option>
                                                                    <option>Homme</option>

                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col">

                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5  col-lg-2  col-form-label txt">Statut</h5>
                                                            <div className="col-lg-8">
                                                                <select class="form-select bordure " id="validationCustom04" required value={situationFamiliale} onChange={handleChangesituationFamiliale} >
                                                                    <option selected disabled value="">Choose...</option>
                                                                    <option>maried</option>
                                                                    <option>divorced</option>
                                                                    <option>single</option>
                                                                    <option>widower</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="mb-3 row">
                                                    <div className="col">
                                                        <div class="row">
                                                            <div className="col-lg-2 col-md-2 py-2">
                                                                <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
                                                            </div>
                                                            <h5 for="inputPassword" class="col-md-5 col-lg-4  col-form-label txt">Pays</h5>
                                                            <div class=" col-lg-6">

                                                                <select class="form-select bordure select-dropdown " id="validationCustom04" required value={pays} onChange={handleChangepays}>
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
                                                             

                                                                <select class="form-select bordure select-dropdown" id="validationCustom02" required value={ville} onChange={handleChangeville} disabled={!pays}>
                                                                    <option value="">Sélectionner une ville</option>
                                                                    {pays &&
                                                                        countries
                                                                            .find((country) => country.name === pays)
                                                                            .cities.map((city, index) => (
                                                                                <option key={index} value={city}>
                                                                                    {city}
                                                                                </option>
                                                                            ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                <div class="mb-3 row">
                                                    <div className="col-lg-1 col-md-1">
                                                        <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
                                                    </div>
                                                    <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Handicape</h5>
                                                    <div class="col-md-8 col-lg-9 ">
                                                        <select class="form-select bordure " id="validationCustom04" required value={handicap} onChange={handleChangehandicap} placeholder="Veuillez saisir votre handicape" >
                                                            <option selected disabled value="">Choose...</option>
                                                            <option>sourd</option>
                                                            <option>muet</option>
                                                            <option>aveugle</option>
                                                            <option>maladieMentale</option>
                                                            <option>mobiliteReduite</option>
                                                        </select>

                                                    </div>
                                                </div>




                                                <div class="col-12">
                                                    <button class="btn btn-primary px-5 " type="submit">  Suivant  </button>
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
export default Demande0






// import React, { useState } from "react";
// import images from "../images/Group 7 (1).png"
// import icon1 from "../images/Lawyer.png"
// import icon2 from "../images/Company.png"
// import icon4 from "../images/Timesheet.png"
// import icon5 from "../images/Tear-Off Calendar.png"

// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { countries } from './paysOptions';


// const Demande0 = () => {
//     const [nom, setNom] = useState("");
//     const [prenom, setPrenom] = useState("");
//     const [numeroTel, setnumeroTel] = useState("");
//     const [nombreEnfants, setnombreEnfants] = useState("");
//     const [situationFamiliale, setsituationFamiliale] = useState("");
//     const [codePostal, setcodePostal] = useState("");
//     const [competences, setcompetences] = useState("");
//     const [pays, setpays] = useState("");
//     const [ville, setville] = useState("");
//     const [rue, setrue] = useState("");
//     const [sexe, setsexe] = useState("");
//     const [dateDeNaissance, setdateDeNaissance] = useState("");
//     const [handicap, sethandicap] = useState("");
//     const [idDemandeur, setidDemandeur] = useState("");
//     const navigate = useNavigate();



//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const data = {
//             idDemandeur: idDemandeur,
//             nom: nom,
//             prenom: prenom,
//             numeroTel: numeroTel,
//             nombreEnfants: nombreEnfants,
//             situationFamiliale: situationFamiliale,
//             codePostal: codePostal,
//             competences: competences,
//             adresse: {
//                 pays: pays,
//                 ville: ville,
//                 rue: rue,
//             },
//             dateDeNaissance: dateDeNaissance,
//             sexe: sexe,
//             handicap: handicap,
//         };

//         fetch("http://localhost:8987/demandeurs-emploi/inscription", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//         })
//             .then(() => {
//                 console.log("inscription effectuée avec succès !");
//             })
//             .catch((error) => {
//                 console.error("Erreur lors de la mise à jour :", error);
//             });
//         navigate("/demande d'emploie/1");

//     };

//     const handleChangeidDemandeur = (event) => {
//         setidDemandeur(event.target.value);
//     };

//     const handleChangeNom = (event) => {
//         setNom(event.target.value);
//     };

//     const handleChangePrenom = (event) => {
//         setPrenom(event.target.value);
//     };
//     const handleChangenumeroTel = (event) => {
//         setnumeroTel(event.target.value);
//     };
//     const handleChangesexe = (event) => {
//         setsexe(event.target.value);
//     };
//     const handleChangesituationFamiliale = (event) => {
//         setsituationFamiliale(event.target.value);
//     };


//     const handleChangedateDeNaissance = (event) => {
//         const date = new Date(dateDeNaissance);
//         const year = date.getFullYear();
//         const month = String(date.getMonth() + 1).padStart(2, "0");
//         const day = String(date.getDate()).padStart(2, "0");
//         const formattedDate = `${year}-${month}-${day}`;
//         setdateDeNaissance(event.target.value);
//     };
//     const handleChangehandicap = (event) => {
//         sethandicap(event.target.value);
//     };
//     const handleChangepays = (event) => {
//         setpays(event.target.value);
//         setville('');
//     };
//     const handleChangeville = (event) => {
//         setville(event.target.value);
//     };


//     return (
//         <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
//             <div className="col c" >
//                 <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Etape 01 : Informations personnelles</h3>

//                 <div className="row d-flex justify-content-right align-items-right h-100">
//                     <div className="col ">
//                         <div className="card" style={{ borderColor: "white" }}>
//                             <div className="card-body">
//                                 <div className="d-flex text-black justify-content-center">
//                                     <div className="flex">
//                                         <img src={images} alt="My Image" className="img-fluid " style={{ width: "500px" }} />
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=" py-3 px-5  d-flex  justify-content-center">
//                     <div className="col px-5 d-flex justify-content  align-items h-100">
//                         <div className="col ">
//                             <div className="card mb-3" style={{ borderRadius: "15px", borderColor: "#4E31AA" }}>
//                                 <div className="card-body p-4">
//                                     <div className="d-flex text-black">

//                                         <div className="flex-grow-1 ms-3 mt-3">
//                                             <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>

//                                                 <div class="mb-3 row">
//                                                     <div className="col-lg-1 col-md-1">
//                                                         <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
//                                                     </div>
//                                                     <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Nom</h5>
//                                                     <div class="col-md-8 col-lg-9 ">
//                                                         <input type="text" class="form-control champs" maxLength={20} id="validationCustom01" required value={nom} onChange={handleChangeNom} placeholder="Veuillez saisir votre nom" />
//                                                     </div>
//                                                 </div>

//                                                 <div class="mb-3 row">
//                                                     <div className="col-lg-1 col-md-1">
//                                                         <img src={icon2} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
//                                                     </div>
//                                                     <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Prenom</h5>
//                                                     <div class="col-md-8 col-lg-9">
//                                                         <input type="text" class="form-control champs" maxLength={20} id="validationCustom02" required value={prenom} onChange={handleChangePrenom} placeholder="Veuillez saisir votre prenom" />
//                                                     </div>
//                                                 </div>

//                                                 <div className="mb-3 row">
//                                                     <div className="col">
//                                                         <div class="row">
//                                                             <div className="col-lg-2 col-md-2 py-2">
//                                                                 <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
//                                                             </div>
//                                                             <h5 for="inputPassword" class="col-md-5 col-lg-4  col-form-label txt">Telephone</h5>
//                                                             <div class=" col-lg-6">
//                                                                 <input type="tel" pattern="[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}" class="form-control champs" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={numeroTel} onChange={handleChangenumeroTel} placeholder="Veuillez saisir le numero" />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col">

//                                                         <div class="row">
//                                                             <div className="col-lg-2 col-md-2 py-2">
//                                                                 <img src={icon5} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
//                                                             </div>
//                                                             <h5 for="inputPassword" class="col-md-5  col-lg-4  col-form-label txt">Date Naissance</h5>
//                                                             <div class=" col-lg-6">
//                                                                 <input type="Date" class="form-control champs" id="validationCustom01" required value={dateDeNaissance} onChange={handleChangedateDeNaissance} placeholder="Veuillez saisir" />
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="mb-3 row">
//                                                     <div className="col">
//                                                         <div class="row">
//                                                             <div className="col-lg-2 col-md-2 py-2">
//                                                                 <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
//                                                             </div>
//                                                             <h5 for="inputPassword" class="col-md-5  col-lg-4  col-form-label txt">Sexe</h5>
//                                                             <div className="col-lg-6">
//                                                                 <select class="form-select bordure " id="validationCustom04" required value={sexe} onChange={handleChangesexe} >
//                                                                     <option selected disabled value="">Choose...</option>
//                                                                     <option>Femme</option>
//                                                                     <option>Homme</option>

//                                                                 </select>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                     <div className="col">

//                                                         <div class="row">
//                                                             <div className="col-lg-2 col-md-2 py-2">
//                                                                 <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
//                                                             </div>
//                                                             <h5 for="inputPassword" class="col-md-5  col-lg-2  col-form-label txt">Statut</h5>
//                                                             <div className="col-lg-8">
//                                                                 <select class="form-select bordure " id="validationCustom04" required value={situationFamiliale} onChange={handleChangesituationFamiliale} >
//                                                                     <option selected disabled value="">Choose...</option>
//                                                                     <option>maried</option>
//                                                                     <option>divorced</option>
//                                                                     <option>single</option>
//                                                                     <option>widower</option>
//                                                                 </select>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="mb-3 row">
//                                                     <div className="col">
//                                                         <div class="row">
//                                                             <div className="col-lg-2 col-md-2 py-2">
//                                                                 <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
//                                                             </div>
//                                                             <h5 for="inputPassword" class="col-md-5 col-lg-4  col-form-label txt">Pays</h5>
//                                                             <div class=" col-lg-6">

//                                                                 <select class="form-select bordure select-dropdown " id="validationCustom04" required value={pays} onChange={handleChangepays}>
//                                                                     <option value="">Sélectionner un pays</option>
//                                                                     {countries.map((country, index) => (
//                                                                         <option key={index} value={country.name}>
//                                                                             {country.name}
//                                                                         </option>
//                                                                     ))}
//                                                                 </select>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col">

//                                                         <div class="row">
//                                                             <div className="col-lg-2 col-md-2 py-2">
//                                                                 <img src={icon4} alt="My Image" className="img-fluid " style={{ width: "35px" }} />
//                                                             </div>
//                                                             <h5 for="inputPassword" class="col-md-5  col-lg-2  col-form-label txt">Ville</h5>
//                                                             <div class="col-lg-8">
                                                             

//                                                                 <select class="form-select bordure select-dropdown" id="validationCustom02" required value={ville} onChange={handleChangeville} disabled={!pays}>
//                                                                     <option value="">Sélectionner une ville</option>
//                                                                     {pays &&
//                                                                         countries
//                                                                             .find((country) => country.name === pays)
//                                                                             .cities.map((city, index) => (
//                                                                                 <option key={index} value={city}>
//                                                                                     {city}
//                                                                                 </option>
//                                                                             ))}
//                                                                 </select>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div class="mb-3 row">
//                                                     <div className="col-lg-1 col-md-1">
//                                                         <img src={icon1} alt="My Image" className="img-fluid " style={{ width: "25px" }} />
//                                                     </div>
//                                                     <h5 for="inputPassword" class="col-md-3 col-lg-2  col-form-label txt">Handicape</h5>
//                                                     <div class="col-md-8 col-lg-9 ">
//                                                         <select class="form-select bordure " id="validationCustom04" required value={handicap} onChange={handleChangehandicap} placeholder="Veuillez saisir votre handicape" >
//                                                             <option selected disabled value="">Choose...</option>
//                                                             <option>sourd</option>
//                                                             <option>muet</option>
//                                                             <option>aveugle</option>
//                                                             <option>maladieMentale</option>
//                                                             <option>mobiliteReduite</option>
//                                                         </select>

//                                                     </div>
//                                                 </div>



//                                                 <input type="Number" class="form-control champs" id="validationCustom01" required value={idDemandeur} onChange={handleChangeidDemandeur} placeholder="Veuillez saisir votre id" />

//                                                 <div class="col-12">
//                                                     <button class="btn btn-primary px-5 " type="submit">  Suivant  </button>
//                                                 </div>
//                                             </form>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </div >
//     )
// }
// export default Demande0