import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import style from '../styles/FindJob.module.css';
import logo from '../images/stafferLogo.png';
import Serach from '../images/Search2.png';
import place from '../images/Place Marker.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import style2 from '../styles/Home.module.css';

import notification from "../images/Alarm.png"

// from demandeur side

export default function FindJob(idDemandeur) {
    idDemandeur = useParams();
    console.log(idDemandeur);
    idDemandeur = parseInt(idDemandeur.idDemandeur);

    // const [data, setData] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [competence, setCompetence] = useState('');
    const [salaryRange, setSalaryRange] = useState(null);
    const [filteredJobs, setFilteredJobs] = useState([]);

    

    const handleSalaryChange = (event) => {
        setSalaryRange(event.target.value);
    };



        const handleChangeSearchComp = event => {
            setCompetence(event.target.value);
        };





        useEffect(() => {
            async function fetchData() {
                const response = await fetch('http://localhost:8082/msjobseeker/Jobs/all');
                const data = await response.json();
                setJobs(data);
                setFilteredJobs(data);
            }
            fetchData();
        }, []);




        const handleChangeSearch = event => {
            setTitle(event.target.value);
        };
        const handleChangeSearchLoca = event => {
            setLocation(event.target.value);
        };


        const handleSearchSubmit = event => {
            event.preventDefault();

            const filteredJobs = jobs.filter(job => job.title.includes(title) && job.location.pays.includes(location));
            setJobs(filteredJobs);


        };






        const handleSearchCompetence = (event) => {
            event.preventDefault();

            const filteredJobs = jobs.filter((job) => {
                return (
                    job.jobSkills &&
                    job.jobSkills.includes(competence)
                );
            });

            setJobs(filteredJobs);
        };





        const handleSubmit = (event) => {
            event.preventDefault();

            let filteredJobs = [];
            if (salaryRange === '100-200') {
                filteredJobs = jobs.filter(job => job.salary >= 100 && job.salary <= 200);
            } else if (salaryRange === '100-500') {
                filteredJobs = jobs.filter(job => job.salary >= 100 && job.salary <= 500);
            } else if (salaryRange === '500-900') {
                filteredJobs = jobs.filter(job => job.salary >= 500 && job.salary <= 900);
            } else if (salaryRange === '1000+') {
                filteredJobs = jobs.filter(job => job.salary > 1000);
            } else {
                console.log('No salary range selected');
                return;
            }

          

            filteredJobs.forEach(job => {
                if (job.salary >= 100 && job.salary <= 200) {
                    console.log(`${job.title}: Salary between 100 and 200`);
                } else if (job.salary >= 100 && job.salary <= 500) {
                    console.log(`${job.title}: Salary between 100 and 500`);
                } else if (job.salary >= 500 && job.salary <= 900) {
                    console.log(`${job.title}: Salary between 500 and 900`);
                } else if (job.salary > 1000) {
                    console.log(`${job.title}: Salary greater than 1000`);
                } else {
                    console.log(`${job.title}: Salary does not match any range`);
                }
            });

            setFilteredJobs(filteredJobs);
        };











        return (
            <>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
                {/* ======================================================================== */}
                <div className={style2.navbar}>
                    <NavLink to={`/HomeDemandeur/${idDemandeur}`} className={style2.link}>
                        <div className={style2.all_logo}>
                            <img src={logo} alt="Logo" className={style2.logo} />
                            <p className={style2.logo_text}><span>Staff</span><span>er</span></p>
                        </div>
                    </NavLink>
                    <div className={style2.nav_links}>
                        <NavLink to={`/HomeDemandeur/${idDemandeur}`} className={style2.nav_link}>Accueil</NavLink>
                        <NavLink to={`/MesDemandes/${idDemandeur}`} className={style2.nav_link}>Mes Demandes</NavLink>
                        <NavLink to={`/findjob/${idDemandeur}`} className={style2.nav_link_main}>Trouver Un Travail</NavLink>
                        {/* <NavLink to={`/`} className={style2.nav_link}>À propos</NavLink> */}
                    </div>
                    <div className={style2.nav_buttons}>
                        {/* <img src={notification} alt="My Image" className="img-fluid  mx-1" style={{ width: "30px" }} /> */}

                        <NavLink to={'/'} className={style2.nav_button}>
                            <button className="btn btn-primary btn-sou">logout</button>
                        </NavLink>

                    </div>

                </div>
                {/* =============================================================================== */}
                <br /><br /><br /><br />
                <div className={style.all}>
                    <div className="container ">
                        <div className="row">
                            <div className='col-3 offset-col-1'>
                                <div className="card blue-border">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#3A1078" }}>Filtrer par</h5>
                                        <form className="form-inline" onSubmit={handleSearchCompetence}>
                                            <div className='row'>
                                                <div className='col-9'>
                                                    <input className="form-control " type="search" placeholder="Categorie" aria-label="Search" value={competence} onChange={handleChangeSearchComp} />
                                                </div>
                                                <div className='col-3'>
                                                    <button className="btn btn-primary  m-auto">
                                                        <img src={Serach} alt="Logo" className={style.search} style={{ width: "1.5rem", height: "auto" }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                        <hr className='mx-auto purple-devider' />
                                        <form className="form-inline" onSubmit={handleSubmit}>
                                            <p className='col-12' style={{ color: "#3A1078" }}>Coût horaire</p>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio" name="flexRadioDefault"
                                                    value="100-200"

                                                    checked={salaryRange === "100-200"}
                                                    onChange={handleSalaryChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    100$-200$
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"

                                                    value="100-500"
                                                    checked={salaryRange === "100-500"}
                                                    onChange={handleSalaryChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    100$-500$
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"

                                                    value="500-900"
                                                    checked={salaryRange === "500-900"}
                                                    onChange={handleSalaryChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    500$-900$
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    value={"1000+"}
                                                    checked={salaryRange === "1000+"}
                                                    onChange={handleSalaryChange}

                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    plus que 1000$
                                                </label>
                                            </div>
                                        </form>
                                        <hr className='mx-auto purple-devider' />
                                        <form className="form-inline">
                                            <p className='col-12' style={{ color: "#3A1078" }}>Type de projet</p>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    moin d'un mois
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    1 - 2 mois
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    2 - 5 mois
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    plus que 6 mois
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 card blue-border">
                                <div className='mt-3'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <form className="form-inline" onSubmit={handleSearchSubmit}>
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        <input className="form-control " type="search" placeholder="Titre d'emploi" aria-label="Search" onChange={handleChangeSearch} />
                                                    </div>
                                                    <div className='col-5'>
                                                        <input className="form-control " type="search" placeholder="location" aria-label="Search" onChange={handleChangeSearchLoca} />
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
                                    {jobs.map((job) => (
                                        <NavLink key={job.idJob} to={`/jobs/${job.idJob}`}>
                                            <div className='card mt-3 blue-border job-card'>
                                                <div className='card-body'>
                                                    <div className='row'>
                                                        <img src={logo} alt="Logo" style={{ width: "auto", height: '2rem' }} />
                                                        <h3 className='col-9' style={{ color: "#3A1078" }}>{job.title || 'Untitled Job'}</h3>
                                                    </div>
                                                    <div className='row'>
                                                        <img src={place} alt="place" style={{ width: "auto", height: '1rem', marginLeft: "0.5rem" }} className='mt-1' />
                                                        <p className='text-muted col-9'>
                                                            {job.location?.pays || 'Unknown country'},
                                                            {job.location?.ville || 'Unknown city'},
                                                            {job.location?.rue || 'Unknown address'}
                                                        </p>
                                                    </div>
                                                    <div className='row'>
                                                        <p className='col-4'>Coût horaire : <span>{job.Salary || 'N/A'}</span></p>
                                                        <p className='col-5'>{job.Duration || 'Duration not specified'}</p>
                                                        <p className='col-3'>Publié :
                                                            <span>{job.jobPublishedDate?.substring(0, 10) || 'Unknown date'}</span>
                                                        </p>

                                                        <p className='col-12 text-justify'>{job.description || 'No description available'}</p>
                                                        <div className='row col-12'>
                                                            <div className='col'>
              <span className="badge badge-pill badge-primary mt-1 mx-1">
                {job.jobSkills || 'No skills specified'}
              </span>
                                                            </div>
                                                            <div className='col'>
                                                                <div className="d-flex justify-content-end">
                                                                    <NavLink to={`/${job.idJob}/postulerDemande`}>
                                                                        <button className="btn btn-primary m-auto btn-sou2">
                                                                            Postuler
                                                                        </button>
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))}
                                    <hr className='mx-auto purple-devider' />


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