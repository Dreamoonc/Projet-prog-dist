import logo from "../images/stafferLogo.png";
import style from "../styles/AddJob.module.css";
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import status from './statusDemandeOptions';

export default function PostulerDemande(idJob) {





    const [lettreDeMotivation, setlettreDeMotivation] = useState("");
    const [cvfile, setcvfile] = useState(null);
    const [demandeemploi, setDemandeemploi] = useState([]);
    const [date, setDate] = useState(new Date().toISOString());
    

    idJob = useParams();
    idJob = parseInt(idJob.id);
    console.log("idJob", idJob);
    const handlecvfileChange = (e) => {
        setcvfile(e.target.files[0]);
    }

    const handlelettreDeMotivationChange = (e) => {
        setlettreDeMotivation(e.target.value);
        setDemandeemploi({ "lettreDeMotivation": lettreDeMotivation })

    }




    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("idJob", idJob);

    //     const formData = new FormData();

    //     formData.append("cvfile", cvfile, cvfile.name);
    //     // formData.append("demandeemploi", demandeemploi)
    //     formData.append("demandeemploi", demandeemploi);
    //     formData.append("date", date);

    //     try {
    //         const response = fetch(`http://localhost:8082/demande/creation/59/${idJob}`, {
    //             method: "POST",
    //             body: formData,

    //         })
    //         console.log("response", response);
    //         console.log("formdata", formData);
    //         console.log("demandeemploi", demandeemploi);
    //         console.log("cvfile", cvfile);
    //         console.log("lettreDeMotivation", lettreDeMotivation);
    //         console.log("date", date);
    //         if (response.ok) {
    //             console.log('Request successful!');
    //         } else {
    //             console.error('Request failed!');
    //         }

    //     } catch (error) {
    //         console.error('Error:', error);
    //     }

    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("idJob", idJob);
      
        const formData = new FormData();
      
        formData.append("cvfile", cvfile, cvfile.name);
      
        const demandeemploiData = {
          lettreDeMotivation: lettreDeMotivation
        };
        const demandeemploiBlob = new Blob([JSON.stringify(demandeemploiData)], { type: 'application/json' });
        formData.append("demandeemploi", demandeemploiBlob);
      
        formData.append("date", date);
      
        try {
          const response = await fetch(`http://localhost:8082/demande/creation/59/${idJob}`, {
            method: "POST",
            body: formData,
          });
          
          console.log("response", response); 
          console.log("formdata", formData);
          console.log("cvfile", cvfile);
          console.log("lettreDeMotivation", lettreDeMotivation);
          console.log("date", date);
      
          if (response.ok) {
            console.log('Request successful!');
          } else {
            console.error('Request failed!');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    


    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <NavLink to={'/home'} className={style.link}>
                <div className={style.all_logo}>
                    <img src={logo} alt="Logo" className={style.logo} />
                    <h1 className={style.logo_text}><span>Staff</span><span>er</span></h1>
                </div>
            </NavLink>


            <div className={style.title_card}>
                <h1 className={style.title}>Postuler Une Demande</h1>
            </div>

            <div className={style.form_card}>
                <div className='row col-10'>
                    <img src={logo} alt="company" style={{ width: "auto", height: '1rem', marginLeft: "0.5rem" }} className='mt-1' />
                    <p className='text-muted col-9'> dans XYZ Corporation</p>
                </div>
                <form className="form_" onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">cvfile</label>
                        <input class="form-control champ2" type="file" id="formFile" onChange={handlecvfileChange} accept="application/pdf" required />
                    </div>

                    <div class="mb-3">
                        <label for="formFile" class="form-label">Lettre de motivation</label>
                        {/* <input class="form-control champ2" type="file" id="formFile" onChange={handlelettreDeMotivationChange} required /> */}
                        <textarea class="form-control champ2" id="exampleFormControlTextarea1" rows="4" onChange={handlelettreDeMotivationChange} required></textarea>
                    </div>


                    <div className="row">

                        <div class="d-flex justify-content-begin col">
                            <button type="submit" className="btn btn-primary btn-sou">Annuler</button>
                        </div>

                        <div class="d-flex justify-content-end col">
                            <button type="submit" className="btn btn-primary btn-sou" >Postuler</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}