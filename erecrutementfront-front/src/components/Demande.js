import logo from "../images/stafferLogo.png";
import style from "../styles/Home.module.css";
import { Link, NavLink } from 'react-router-dom';
import place from '../images/Place Marker.png'
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import notification from "../images/Alarm.png"
import Serach from '../images/Search2.png';
import user from '../images/User.png';


export default function Demande(idDemande, idJob, idEmployeur) {

    const [demande, setDemande] = useState([]);
    const [demandeur, setDemandeur] = useState({});
    const [cv, setCv] = useState([]);


    const ids = useParams();
    console.log("ids", ids);
    idDemande = parseInt(ids.idDemande);
    console.log("idDemande", idDemande);
    idJob = parseInt(ids.idJob);
    console.log("idJob", idJob);
    idEmployeur = parseInt(ids.idEmployeur);
    console.log("idEmployeur", idEmployeur);

    fetch(`http://localhost:8082/msjobseeker/demande/${idDemande}`)

    useEffect(() => {
        console.log("demande", demande);
    }, [demande]);

    useEffect(() => {
        console.log("demandeur", demandeur);
    }, [demandeur]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8082/msjobseeker/demande/${idDemande}`);
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                const data = await response.json();
                setDemande(data);
                console.log("demande", demande);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            // !get the demnde from msemployer for the status
            // try{
            //     const response = await fetch(`http://localhost:8080/msemployer/Demandes/${idDemande}`);
            //     if (!response.ok) {
            //         throw new Error('Request failed');
            //     }
            //     const data = await response.json();
            //     setDemande(data);
            //     console.log("demande from msemployer", demande);
            // }catch (error) {
            //     console.error('Error fetching data:', error);
            // }


            const response2 = await fetch(`http://localhost:8082/msjobseeker/demande/dmandeur/${idDemande}`);
            const demandeurData = await response2.json();
            setDemandeur(demandeurData);

            const response3 = await fetch(`http://localhost:8082/msjobseeker/demande/cv/${idDemande}`);
            const cvBlob = await response3.blob();
            const cvFile = new File([cvBlob], `cv_${demande.idDemande}`, { type: "application/pdf" });
            setCv(cvFile)
            console.log("cv", cv);





        }
        fetchData();
    }, []);



    function refuserDemande() {
        fetch(`http://localhost:8080/msemployer/Demandes/${idDemande}/refuser`, {
            method: 'PUT',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                // Handle successful response here
                console.log('Request successful');
            })
            .catch(error => {
                // Handle error here
                console.error('Request failed:', error);
            });
    }

    function accepterDemande() {
        fetch(`http://localhost:8080/msemployer/Demandes/${idDemande}/accepter`, {
            method: 'PUT',
        })
    }



    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            {/* ======================================================================== */}
            <div className={style.navbar}>
                <NavLink to={`/EmployerHome/${idEmployeur}`} className={style.link}>
                    <div className={style.all_logo}>
                        <img src={logo} alt="Logo" className={style.logo} />
                        <p className={style.logo_text}><span>Staff</span><span>er</span></p>
                    </div>
                </NavLink>
                <div className={style.nav_links}>
                    <NavLink to={`/EmployerHome/${idEmployeur}`} className={style.nav_link}>Accueil</NavLink>
                    <NavLink to={`/MyJobs/${idEmployeur}`} className={style.nav_link_main}>Mes Emplois</NavLink>
                    <NavLink to={`/HireTalent/${idEmployeur}`} className={style.nav_link}>embaucher des talents</NavLink>
                    <NavLink to={`/statEmployeur/${idEmployeur}`} className={style.nav_link}>Statistique</NavLink>

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
            <br /><br />



            <div className="all">



                <div className="card blue-border mt-5 col-10 mx-auto shadow" key={demande.idDemande}>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <img src={user} alt="user-icon" style={{ width: "auto", height: '3.5rem', }} />
                                    <h3 className='col-9 mt-2' style={{ color: "#3A1078" }}>{demandeur.nom}</h3>
                                </div>
                            </div>
                            <div className='col d-flex justify-content-end '>
                                <NavLink
                                    to={``}
                                >
                                    <button  className="btn btn-danger btn-sou-danger mx-3 mt-2"
                                    style={{ width: "100px" }}
                                    onClick={refuserDemande}>
                                    refuser
                                    </button>
                                </NavLink>
                                <NavLink to={``} >
                                    <button className="btn btn-primary btn-sou2 mx-3 mt-2" style={{ width: "100px" }} onClick={accepterDemande}>
                                    accepter
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col-8 mx-auto'>
                                <p style={{ fontWeight: "bold" }}>Lettre de motivation:</p>
                                {demande.lettreDeMotivation}
                            </div>

                            <div className='col-8 mx-auto'>
                                <span style={{ fontWeight: "bold" }}>status: </span>
                                {demande.status}
                            </div>




                        </div>
                        <div className="d-flex justify-content-end col mt-2">
                            <button className="btn btn-primary btn-sou">
                                <a
                                    href={`data:${cv.type};base64,${btoa(cv.data)}`}
                                    download={`cv_${demande.idDemande}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "white" }}
                                    className="poppins"
                                >
                                    Download CV
                                </a>
                            </button>
                        </div>
                    </div >
                </div >
            </div >




        </>
    );
}