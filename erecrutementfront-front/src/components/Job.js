import logo from "../images/stafferLogo.png";
import style from "../styles/FindJob.module.css";
import { Link, NavLink } from 'react-router-dom';
import place from '../images/Place Marker.png'
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';




export default function Job(idJob) {

    
    const [job, setJob] = useState([]);
    idJob = useParams();
    console.log(idJob);
    idJob = parseInt(idJob.id);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8080/Jobs/${idJob}`);
            const data = await response.json();
            console.log(data);
            setJob(data);
        }
        fetchData();   
    }, [idJob]);


    console.log(job);


    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
         {/* ======================================================================== */}
         <div className={style.navbar}>
                <NavLink to={'/home'} className={style.link}>
                    <div className={style.all_logo}>
                        <img src={logo} alt="Logo" className={style.logo}/>
                        <p className={style.logo_text}><span>Staff</span><span>er</span></p>
                    </div>
                </NavLink>
                <div className={style.nav_links}>
                    <NavLink to={'/home'} className={style.nav_link}>Home</NavLink>
                    <NavLink to={'/FindJob'} className={style.nav_link}>Find Jobs</NavLink>
                    <NavLink to={'/HireTalent'} className={style.nav_link}>Hire Talent</NavLink>
                    <NavLink to={'/'} className={style.nav_link}>About Us</NavLink>
                </div>
                <div className={style.nav_buttons}>
                    <NavLink to={'/'} className={style.nav_button}>Login</NavLink>
                    <NavLink to={'/'} className={style.nav_button}>
                        <button className="btn btn-primary btn-sou">Register</button>
                    </NavLink>
                </div>

            </div>

            {/* ======================================================================== */}
            <br/><br/>
           

            
        <div className="all"> 

       
            
            <div className="card blue-border mt-5 col-10 mx-auto shadow" key={job.idJob}>
                <div className="card-body">
                <div className='row mt-2 mx-2'>
                    <h2 className='col-9' style={{color:"#3A1078"}}>{job.title}
                    </h2>
                </div>
   
                <div className='row col-10'>
                    <img src={place} alt="place" style={{width: "auto", height:'1rem', marginLeft:"0.5rem"}} className='mt-1' />
                    <p className='text-muted col-9'>{job.location?.pays}, {job.location?.rue}, {job.location?.ville} </p>
                </div>
                <div className='row col-10'>
                    <img src={logo} alt="company" style={{width: "auto", height:'1rem', marginLeft:"0.5rem"}} className='mt-1' />
                    <p className='text-muted col-9'>entreprise : {job.company}</p>
                </div>
                <div className="col-10 mx-auto">
                    <p style={{fontWeight:"bold"}}>Description d'emploi:</p>

                    <p>
                    
                    {job.description}
                    </p>

                    <div className="row">
                        <p style={{fontWeight:"bold"}}>Exigences:</p>
                        <ul className="col-10 mx-auto">
                            <li>{job.jobSkills}</li>
                        </ul>
                    </div>
                    <p>
                    {job.company} offer {job.salary} DA
                    </p>
                    <p>
                    </p>

                    <div className="d-flex justify-content-end ">
                        <NavLink to={`/${job.idJob}/postulerDemande`}>
                            <button className="btn btn-primary m-auto btn-sou " style={{width: "10rem", height: "3rem", fontSize:"1.25rem"}}>
                                Postuler
                            </button> 
                        </NavLink>
                    </div>
                </div>
                </div>
                    
            </div>
            <br/><br/><br/><br/>
        </div> 
        
        </>
    );
}