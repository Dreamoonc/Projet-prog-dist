import logo from "../images/stafferLogo.png";
import style from "../styles/Home.module.css";
import { Link, NavLink } from 'react-router-dom';
import place from '../images/Place Marker.png'
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import notification from "../images/Alarm.png"
import Serach from '../images/Search2.png';
import user from '../images/User.png';






export default function DemandesByJob(idJob, idEmployer) {


    const [demandes, setDemandes] = useState([]);
    const [idDemandeur, setIdDemandeur] = useState([]);
    const [demandeur, setDemandeur] = useState();
    const [demandeurs, setDemandeurs] = useState({});
    const [cv, setCv] = useState([]);

    const ids = useParams();
    console.log("idjob", idJob);
    idJob = parseInt(ids.idJob);
    console.log("idjob", idJob);
    idEmployer = parseInt(ids.idEmployeur);
    console.log("idEmployer", idEmployer);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8080/msemployer/Jobs/${idJob}/demandes`);
            const data = await response.json();
            console.log("demanes data", data);
            setDemandes(data);



            data.map(async (demande) => {
                // console.log("demande.idDemandeur", demande.idDemandeur);

                const response2 = await fetch(`http://localhost:8082/msjobseeker/demande/dmandeur/${demande.idDemande}`);
                const demandeurData = await response2.json();
                setDemandeurs((prevDemandeurs) => ({
                    ...prevDemandeurs,
                    [demande.idDemande]: demandeurData,
                }));
                console.log("demandeurs", demandeurs);
                // console.log("demandes id ", demande.idDemande);


                // const response3 = await fetch(`http://localhost:8082/demande/cv/${demande.idDemande}`);
                // const cvData = await response3.blob();
                // setCv((prevCv) => ({
                //     ...prevCv,
                //     [demande.idDemande]: cvData,

                // }));
                const response3 = await fetch(`http://localhost:8082/msjobseeker/demande/cv/${demande.idDemande}`);
                const cvBlob = await response3.blob();
                const cvFile = new File([cvBlob], `cv_${demande.idDemande}`, { type: "application/pdf" });
                setCv((prevCv) => ({
                    ...prevCv,
                    [demande.idDemande]: cvFile,
                }));
                console.log("cv", cv);
                console.log("demandes id ", demande.idDemande);


            });



        }
        fetchData();
    }, [idJob]);








    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            {/* ======================================================================== */}
            <div className={style.navbar}>
                <NavLink to={`/EmployerHome/${idEmployer}`} className={style.link}>
                    <div className={style.all_logo}>
                        <img src={logo} alt="Logo" className={style.logo} />
                        <p className={style.logo_text}><span>Staff</span><span>er</span></p>
                    </div>
                </NavLink>
                <div className={style.nav_links}>
                    <NavLink to={`/EmployerHome/${idEmployer}`} className={style.nav_link}>Accueil</NavLink>
                    <NavLink to={`/MyJobs/${idEmployer}`} className={style.nav_link_main}>Mes Emplois</NavLink>
                    <NavLink to={`/HireTalent/${idEmployer}`} className={style.nav_link}>embaucher des talents</NavLink>
                    <NavLink to={`/statEmployeur/${idEmployer}`} className={style.nav_link}>Statistique</NavLink>

                    {/* <NavLink to={`/`} className={style.nav_link}>À propos</NavLink> */}
                </div>
                <div className={style.nav_buttons}>
                    {/* <img src={notification} alt="My Image" className="img-fluid  mx-1" style={{ width: "30px" }} /> */}
                    <NavLink to={'/'} className={style.nav_button}>
                        <button className="btn btn-primary btn-sou">logout</button>
                    </NavLink>

                </div>

            </div>

            {/* ======================================================================== */}
            <br /><br /><br /><br />


            <div className="col-9 card blue-border mx-auto p-2">
                <div className='mt-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <form className="form-inline">
                                <div className='row'>
                                    <div className='col-10'>
                                        <input className="form-control " type="search" placeholder="Titre ou mots clés" aria-label="Search" />
                                    </div>

                                    <div className='col-2'>
                                        <button className="btn btn-primary  m-auto">
                                            <img src={Serach} alt="Logo" className={style.search} style={{ width: "1.5rem", height: "auto" }} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='align-self-end mt-3'>
                            <select className="sort" id="sort">
                                <option defaultValue>Le plus récent</option>
                                <option value="1">Le plus ancient</option>
                            </select>
                        </div>
                    </div>
                    {demandes.map((demande) => (
                        <div>
                            <NavLink key={demande.idDemande} to={`/demande/${idEmployer}/${idJob}/${demande.idDemande}`}>
                                <div className='card mt-3 blue-border job-card' key={demande.idDemande}>
                                    <div className='card-body'>
                                        {/* <div className='row'>
                                            <img src={user} alt="user-icon" style={{ width: "auto", height: '3.5rem', }} />
                                            <h3 className='col-9 mt-2' style={{ color: "#3A1078" }}>{demandeurs[demande.idDemande].nom}</h3>
                                        </div> */}


                                        {demandeurs[demande.idDemande] && (
                                            <div className='row'>
                                                <img src={user} alt="user-icon" style={{ width: "auto", height: '3.5rem', }} />
                                                <h3 className='col-9 mt-2' style={{ color: "#3A1078" }}>{demandeurs[demande.idDemande].nom}</h3>
                                            </div>
                                        )}

                                        <div className='row'>
                                            <div className='col-12 mt-2'>
                                                <p className='col-12 text-justify'><span style={{ fontWeight: "bold" }}> Lettre de motivation: </span>{demande.lettreDeMotivation ? demande.lettreDeMotivation : " letter de motivation null"}</p>
                                            </div>
                                            <div className='col-12 mt-2'>
                                                <p className='col-12 text-justify'><span style={{ fontWeight: "bold" }}> Status: </span>{demande.status}</p>
                                            </div>
                                            {/* <div className="btn btn-primary col-2">
                                            {cv[demande.idDemande] ? <a href={URL.createObjectURL(cv[demande.idDemande])} download={`cv_${demande.idDemande}`} target="_blank" rel="noopener noreferrer">cv</a> : "cv not available"}
                                        </div> */}
                                        </div>
                                        <div className='row'>


                                            <div className="d-flex justify-content-end col">
                                                <button className="btn btn-primary btn-sou">
                                                    {cv[demande.idDemande] ? (
                                                        <a
                                                            href={URL.createObjectURL(cv[demande.idDemande])}
                                                            download={`cv_${demande.idDemande}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{ color: "white" }}
                                                            className="poppins"
                                                        >
                                                            Download CV
                                                        </a>
                                                    ) : (
                                                        "CV not available"
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {/* id demande:{demande.idDemande}
                                        demandeur: {demandeurs[demande.idDemande] ? demandeurs[demande.idDemande].nom : ''} */}


                                    </div>
                                </div>
                                {/* </NavLink> */}
                                <hr className='mx-auto purple-devider' />
                            </NavLink>
                        </div>
                    ))}


                </div>
                <br />
            </div>




        </>
    );
}