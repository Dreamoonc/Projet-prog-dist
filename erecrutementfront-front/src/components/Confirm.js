import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Home.module.css'

import logo from "../images/stafferLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';


export default function Confirm(email) {
    email = useParams();

    email = email.email;
    console.log(email);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://127.0.0.1:5000/api/auth/confirm/${email}`);
            const data = await response.json();
            
        }
        fetchData();
    }, []);

    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        

       
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
                    <h1 className={style.texxt}>votre compte a ete <span className={style.purple_text}>active</span></h1>
                    <br/>
                    <div className={style.statistics_cards}>
                        
                        <div className={style.card}>
                            <div className={style.card_text}>
                               <NavLink to={'/login'} className={style.nav_button}>

                                    <button className="btn btn-primary btn-sou">Login</button>
                                </NavLink>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>

            </div>        

        </>
    );
}