import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import style from '../styles/Home.module.css'

import logo from "../images/stafferLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

import notification from "../images/Alarm.png"

export default function Home(idDemandeur) {
    // idJob = useParams();
    // console.log(idJob);
    // idJob = parseInt(idJob.id);
    idDemandeur = useParams();
    console.log(idDemandeur);
    idDemandeur = parseInt(idDemandeur.id);

    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        

        {/* ======================================================================== */}
            <div className={style.navbar}>
                <NavLink to={`/HomeDemandeur/${idDemandeur}`} className={style.link}>
                    <div className={style.all_logo}>
                        <img src={logo} alt="Logo" className={style.logo}/>
                        <p className={style.logo_text}><span>Staff</span><span>er</span></p>
                    </div>
                </NavLink>
                <div className={style.nav_links}>
                    <NavLink to={`/HomeDemandeur/${idDemandeur}`} className={style.nav_link_main}>Accueil</NavLink>
                    <NavLink to={`/MesDemandes/${idDemandeur}`} className={style.nav_link}>Mes Demandes</NavLink>
                    <NavLink to={`/findjob/${idDemandeur}`} className={style.nav_link}>Trouver Un Travail</NavLink>

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
            <div className={style.content}>
                <svg className={style.circle}>
                    <defs>
                        <radialGradient id="grad1" cx="0%" cy="75%" r="100%" fx="0%" fy="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(128,128,128)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
                        </radialGradient>
                        <radialGradient id="grad2" cx="50%" cy="75%" r="100%" fx="0%" fy="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(128,128,128)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
                        </radialGradient>
                        <radialGradient id="grad3" cx="25%" cy="75%" r="100%" fx="0%" fy="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(128,128,128)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
                        </radialGradient>
                    </defs>
                    <circle cx="1000" cy="210" r="290" fill="url(#grad1)" opacity="0.5" />
                    <circle cx="700" cy="440" r="150" fill="url(#grad2)" opacity="0.5" />
                    <circle cx="530" cy="550" r="100" fill="url(#grad2)" opacity="0.5" />
                </svg>

                <div className={style.welcome_text}>

                    <h1>Embauchez des <span className={style.purple_text}>talents</span>.</h1>
                    <h1>Trouver le <span className={style.blue_text}>succès</span>.</h1>
                    <p><span>534</span> Emplois and <span>534</span> Talents sont là.</p>
                </div>

                <div className={style.search_bar}>
                    {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
                        <TextField id="outlined-search" label="Search Title or Keyword" type="search" 
                            className={`${style.search_textfield} ${classes.root}`} variant="outlined"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src={SearchIco} alt="search icon" className={style._logo_}/>
                                </InputAdornment>
                                ),}}/>

                        <TextField id="outlined-search" label="Location" type="search"
                            className={`${style.search_textfield} ${classes.root}`} variant="outlined"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src={locationIco} alt="search icon" className={style._logo_}/>
                                </InputAdornment>
                                ),}}/>
                        <SearchButton>Search</SearchButton>
                    </Box> */}

                </div>

                <div className={style.statistics}>
                    <h1 className={style.texxt}>Trouvez ici ce dont vous avez <span className={style.purple_text}>Besoin</span></h1>
                    <br/>
                    <div className={style.statistics_cards}>
                        <div className={style.card}>
                            <div className={style.card_text}>
                                {/* <img src={marketing} alt="job icon" className={style._logo_}/> */}
                                <p>Marketing</p>
                                <p>132 jobs available</p>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_text}>
                                <p>marketing</p>
                                <p>132 jobs available</p>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_text}>
                                <p>marketing</p>
                                <p>132 jobs available</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

            </div>        
            {/* <br /><br /><br /><br /><br /><br /><br /><br />
            <div className={style.test_text}> 
            
                    <h1>Home Page</h1>
                    <button><NavLink to="/AddJob">/AddJob</NavLink></button>
                    <button><NavLink to="/profile">/profile</NavLink></button>
                    <button><NavLink to="/demande d'emploie/1">/demande d'emploie/1</NavLink></button>
                    <button><NavLink to="App">App</NavLink></button>
                    
            </div> */}
        </>
    );
}