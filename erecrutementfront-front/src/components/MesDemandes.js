import logo from "../images/stafferLogo.png";
import style from "../styles/FindJob.module.css";
import { NavLink, useParams } from 'react-router-dom';
import place from '../images/Place Marker.png'
import { useState, useEffect } from 'react';
import style2 from '../styles/Home.module.css';

import notification from "../images/Alarm.png"
import Serach from '../images/Search2.png';




export default function MesDemandes(idDemandeur) {
    // !id demandeur is supposed to be the id of the user who is logged in
    // http://localhost:8082/demande//liste-demandes/${idDemandeur}
    idDemandeur = useParams();
    console.log("idDemandeur", idDemandeur);
    idDemandeur = parseInt(idDemandeur.idDemandeur);

    const [demandes, setDemandes] = useState([]);
    const [title, setTitle] = useState('');
    const [idJob, setIdJob] = useState([]);
    const [job, setJob] = useState([]);
    const [cv, setCv] = useState([]);

    const handleDownload = async (demandeId) => {
        
        try {
          const response = await fetch(`http://localhost:8082/msjobseeker/demande/cv/${demandeId}`);
          if (!response.ok) {
            throw new Error('Failed to download CV');
          }
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `cv_${demandeId}.pdf`;
          link.click();
        } catch (error) {
          console.error(error);
        }
      };
      




    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8082/msjobseeker/demande/liste-demandes/${idDemandeur}`);
            const data = await response.json();
            setDemandes(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8080/msemployer/Jobs/${idJob}`);
            const data = await response.json();
            console.log(data);
            setJob(data);
        }
        fetchData();
    }, [idJob]);
    const handleChangeSearch = event => {
        setTitle(event.target.value);
    };



    const handleSearchSubmit = event => {
        event.preventDefault();

        const filteredDemandes = demandes.filter(demande => demande.title.includes(title));
        setDemandes(filteredDemandes);


    };



    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            {/* ======================================================================== */}
            <div className={style.navbar}>
                <NavLink to={`/HomeDemandeur/${idDemandeur}`} className={style.link}>
                    <div className={style.all_logo}>
                        <img src={logo} alt="Logo" className={style.logo} />
                        <p className={style.logo_text}><span>Staff</span><span>er</span></p>
                    </div>
                </NavLink>
                <div className={style.nav_links}>
                    <NavLink to={`/HomeDemandeur/${idDemandeur}`} className={style.nav_link}>Accueil</NavLink>
                    <NavLink to={`/MesDemandes/${idDemandeur}`} className={style.nav_link}>Mes Demandes</NavLink>
                    <NavLink to={`/findjob/${idDemandeur}`} className={style.nav_link_main}>Trouver Un Travail</NavLink>
                    

                    {/* <NavLink to={`/`} className={style.nav_link}>À propos</NavLink> */}
                </div>
                <div className={style.nav_buttons}>
                    {/* <img src={notification} alt="My Image" className="img-fluid  mx-1" style={{ width: "30px" }} /> */}

                    <NavLink to={'/'} className={style.nav_button}>
                        <button className="btn btn-primary btn-sou">logout</button>
                    </NavLink>
                    

                </div>

            </div>
            {/* =============================================================================== */}
            <br></br><br></br><br></br><br></br>
            <div className={style.all}>
                <div className="container ">
                    <div className="row">

                        <div className="col-10 card blue-border mx-auto">
                            <div className='mt-3'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <form className="form-inline" onSubmit={handleSearchSubmit}>
                                            <div className='row'>
                                                <div className='col-10'>
                                                    <input className="form-control " type="search" placeholder="Titre d'emploi" aria-label="Search" onChange={handleChangeSearch} />
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
                                {demandes.length > 0 ? (
                                    demandes.map((demande) => (
                                        <div>
                                            {/* !add my demande */}
                                            {/* <NavLink key={demande.idDemande} to={`/MyDemande/${demande.idDemande}`}> */}
                                            <NavLink key={demande.idDemande} to={`#`}>
                                                <div className='card mt-3 blue-border job-card' key={demande.idDemande}>
                                                    <div className='card-body'>
                                                        <div className='row'>
                                                            <img src={logo} alt="Logo" style={{ width: "auto", height: '2rem', }} />
                                                            <h3 className='col-9' style={{ color: "#3A1078" }}>Demande:</h3>
                                                        </div>
                                                    </div>
                                                    <div className='card-body'>
                                                        <div className='row'>
                                                            <p className='col-9' style={{ color: "#3A1078" }}>Lettre De Motivation: &nbsp; {demande.lettreDeMotivation}</p>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={() => handleDownload(demande.idDemande)}
                                                            >
                                                                Download CV
                                                            </button>
                                                        </div>
                                                    </div>
                                                    </div>


                                            </NavLink>
                                        </div>

                                    )))
                                    : (
                                        <div className="text-center">You have no demandes.</div>

                                    )
                                }



                            </div>
                            <br />
                        </div>

                    </div>
                    <br />

                </div>
            </div>

        </>
    );

}