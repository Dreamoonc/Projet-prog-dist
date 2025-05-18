import logo from "../images/stafferLogo.png";
import style from "../styles/AddJob.module.css";
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import CompetenceNom from './competenceOptions';
import { useParams } from 'react-router-dom';




export default function AddJob(idEmployer) {
    idEmployer = useParams();
    idEmployer = parseInt(idEmployer.idEmployeur);
    console.log(idEmployer);

    const competenceOptions = Object.values(CompetenceNom)

    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [location, setLocation] = useState('');
    const [pays, setPays] = useState('');
    const [Ville, setVille] = useState('');
    const [rue, setRue] = useState('');
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [sexe, setSexe] = useState('');
    const [jobPublishedDate, setJobPublishedDate] = useState('');
    const [jobExpiredDate, setjobExpiredDate] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [situation, setSituation] = useState('');
    const [jobTime, setJobTime] = useState('');
    const [teamWork, setTeamWork] = useState('');
    const [languages, setlanguages] = useState('');
    const [salary, setSalary] = useState('');
    const [duration, setduration] = useState('');
    const [company, setCompany] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [jobSkills, setJobSkills] = useState([]);

    // const navigate = useNavigate();

    const [divs, setDivs] = useState([]);
    // const [nom, setnom] = useState("");

    const ajouterDiv = () => {
        const newDiv = {
            id: Date.now(), // identifiant unique généré avec la date courante
            content: jobSkills
        };
        setDivs([...divs, newDiv]);
    };
    


    const handleSubmit = (e) => {
        e.preventDefault();
        let location = {
            pays: pays,
            Ville: Ville,
            rue: rue
        }
        alert("you have submitted the form")




        const data = {
            title: title,
            description: description,
            location: location,
            minAge: minAge,
            maxAge: maxAge,
            sexe: sexe,
            // jobPublishedDate: new Date().toISOString(),
            // jobExpiredDate: new Date(jobExpiredDate).toISOString(),
            educationLevel: educationLevel,
            situation: situation,
            jobTime: jobTime,
            teamWork: teamWork,
            languages: languages,
            salary: salary,
            duration: duration,
            company: company,
            companySize: companySize,
            // jobSkills: jobSkills,

        }
        // try{
        //     const response = await fetch(`http://localhost:8080/msemployer/Jobs/employer/${idEmployer}`, {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(data),
    
        //     })
        //     if (response.ok) {
        //         console.log('Request successful!');
        //         console.log(data);
        //       } else {
        //         console.error('Request failed!');
        //       }
        //     } catch (error) {
        //       console.error('Error:', error);
        //     }
        
        
        fetch(`http://localhost:8080/msemployer/Jobs/employer/${idEmployer}`, {
            
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),

        })
            .then(() => {
                console.log("creation effectuée avec succès !");
                console.log(data);


            })
            .catch((error) => {
                console.error("lll:", error);
            });
        // window.location.href = `/MyJobs/${idEmployer}`;
    }




    



    const handleChangenom = (event) => {
        setJobSkills(event.target.value);
    };

    const supprimerDiv = (jobSkills) => {
        // appel de l'API pour supprimer la compétence correspondante
        fetch(`http://localhost:8082/competences/${jobSkills}`, {
            method: 'DELETE'
        })
            .then(() => setDivs(divs.filter(div => div.content !== jobSkills)))
            .catch(error => console.error(error));
    };




    const handletitleChange = (e) => {
        settitle(e.target.value);
    }
    const handledescriptionChange = (e) => {
        setdescription(e.target.value);
    }
    // const handleLocationChange = (e) => {
    //     setLocation(e.target.value);
    // }
    const handlePaysChange = (e) => {
        setPays(e.target.value);
    }
    const handleVilleChange = (e) => {
        setVille(e.target.value);
    }
    const handleRueChange = (e) => {
        setRue(e.target.value);
    }
    const handleMinAgeChange = (e) => {
        setMinAge(e.target.value);
    }
    const handleMaxAgeChange = (e) => {
        setMaxAge(e.target.value);
    }
    const handleSexeChange = (e) => {
        setSexe(e.target.value);
    }
    const handlejobExpiredDateChange = (e) => {
        setjobExpiredDate(e.target.value);
    }
    const handleEducationLevelChange = (e) => {
        setEducationLevel(e.target.value);
    }
    const handleSituationChange = (e) => {
        setSituation(e.target.value);
    }
    const handleJobTimeChange = (e) => {
        setJobTime(e.target.value);
    }
    const handleTeamWorkChange = (e) => {
        if (e.target.value === "oui") {
            setTeamWork(true);
        } else {
            setTeamWork(false);
        }
    }
    const handlelanguagesChange = (e) => {
        setlanguages(e.target.value);
    }
    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    }
    const handledurationChange = (e) => {
        setduration(e.target.value);
    }
    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }
    const handleCompanySizeChange = (e) => {
        setCompanySize(e.target.value);
    }

    const handleJobSkillsChange = (e) => {
        setJobSkills(e.target.value);
    }



    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

            <link href="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.min.css" rel="stylesheet" />
            <NavLink to={'/home'} className={style.link}>
                <div className={style.all_logo}>
                    <img src={logo} alt="Logo" className={style.logo} />
                    <h1 className={style.logo_text}><span>Staff</span><span>er</span></h1>
                </div>
            </NavLink>


            <div className={style.title_card}>
                <h1 className={style.title}>Ajouter un emploi</h1>
            </div>

            <div className={style.form_card}>
                <form className="form_">
                    <div className="form-group">
                        <label htmlFor="title">Titre d'emploi</label>
                        <input type="text" className="form-control champ2" id="title" placeholder="Titre d'emploi" onChange={handletitleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobDescription">Description de l'emploi</label>
                        <textarea className="form-control champ2" id="jobdesc" rows="3" onChange={handledescriptionChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Emplacement</label>
                        <div className="row">

                            <input type="text" className="form-control champ2 col" id="pays" placeholder="Pays" onChange={handlePaysChange} />
                            <input type="text" className="form-control champ2 col" id="ville" placeholder="Ville" onChange={handleVilleChange} />
                            <input type="text" className="form-control champ2 col" id="rue" placeholder="rue" onChange={handleRueChange} />

                        </div>

                    </div>
                    <div className="row">
                        <div className="form-group col col-md-6 col-offset-2">
                            <label htmlFor="minAge">Âge minimum</label>
                            <input type="number" className="form-control champ2" id="minAge" placeholder="Âge minimum" min="10" onChange={handleMinAgeChange} />
                        </div>
                        <div className="form-group col col-md-6 ">
                            <label htmlFor="maxAge">Âge maximal</label>
                            <input type="number" className="form-control champ2" id="MaxAge" placeholder="Âge maximal" max="100" onChange={handleMaxAgeChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexe">Sexe</label>
                        <div className="input-group mb-3">
                            <select className="custom-select form-control champ2" id="sexe" onChange={handleSexeChange}>
                                <option defaultValue>Choisir...</option>
                                <option value="Male">male</option>
                                <option value="Female">female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobExpiredDate">Date d'expiration</label>
                        <input type="date" className="form-control champ2" id="jobExpiredDate" placeholder="Date d'expiration"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="educationLevel">niveau d'éducation</label>
                        <div className="input-group mb-3">
                            <select className="custom-select form-control champ2" id="educationLevel" onChange={handleEducationLevelChange}>
                                <option defaultValue>Choisir...</option>
                                <option value="Niveau Secondaires">Niveau Secondaire</option>
                                <option value="Niveau Terminal">Niveau Terminal</option>
                                <option value="Baccalauréat">Baccalauréat</option>
                                <option value="TS Bac +2">TS Bac +2</option>
                                <option value="Licence (LMD), Bac + 3">Licence (LMD), Bac + 3</option>
                                <option value="Master 2, Ingéniorat, Bac + 5">Master 2, Ingéniorat, Bac + 5</option>
                                <option value="Magistère Bac + 7">Magistère Bac + 7</option>
                                <option value="Doctorat">Doctorat</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="situation">Situation Familial</label>
                        <div className="input-group mb-3">
                            <select className="custom-select form-control champ2" id="situation" onChange={handleSituationChange}>
                                <option defaultValue>Choisir...</option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                                <option value="Divorced">Divorced</option>
                                <option value="widower">widower</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="languages">Temps de Travail</label>
                        <input type="text" className="form-control champ2" id="jobTime" placeholder="Temps de Travail (par jours)" onChange={handleJobTimeChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="teamWork">Travail en équipe</label>
                        <div className="input-group mb-3">
                            <select className="custom-select form-control champ2" id="teamWork" onChange={handleTeamWorkChange}>
                                <option defaultValue>Choisir...</option>
                                <option value="oui">oui</option>
                                <option value="non">non</option>
                            </select>
                        </div>
                        
                    </div>
                   
                    <div className="form-group">
                        <label htmlFor="languages">Langues</label>
                        <input type="text" className="form-control champ2" id="languages" placeholder="Langues" onChange={handlelanguagesChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salaire <small className="text-muted">DA/h</small></label>
                        <input type="number" step="0.01" className="form-control champ2" id="salary" placeholder="Salaire" onChange={handleSalaryChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Durée <small className="text-muted">h/jours</small></label>
                        <input type="text" className="form-control champ2" id="duration" placeholder="Durée" onChange={handledurationChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Nom de l'entreprise</label>
                        <input type="text" className="form-control champ2" id="company" placeholder="Nom de l'entreprise" onChange={handleCompanyChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companySize">Taille de l'entreprise</label>
                        {/* <input type="text" className="form-control champ2" id="companySize" placeholder="Taille de l'entreprise" onChange={handleCompanySizeChange} /> */}
                        <div className="input-group mb-3">
                            <select className="custom-select form-control champ2" id="companySize" onChange={handleCompanySizeChange}>
                                <option defaultValue>Choisir...</option>
                                <option value="small">small</option>
                                <option value="meduim">meduim</option>
                                <option value="big">big</option>
                                <option value="large">large</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="form-check m-2">
                        <p>Travail en équipe</p>
                        <div className="row">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label col" htmlFor="flexRadioDefault1">
                                oui
                            </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label col" htmlFor="flexRadioDefault1">
                                non
                            </label>
                        </div>

                    </div> */}
                    <div className="form-group">
                        <label htmlFor="jobSkills">Compétences professionnelles</label>

                        {/* https://stackoverflow.com/questions/30190588/html-select-multiple-as-dropdown */}
                        <select class="form-select bordure select-dropdown champ2 " id="validationCustom04" required value={jobSkills} onChange={handleJobSkillsChange} >
                            <option selected disabled value="">Choisissez Vos Compétences...</option>
                            {Object.values(CompetenceNom).map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}

                        </select>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-primary btn-sm mt-2" onClick={ajouterDiv}>Ajouter comptenece</button>
                        </div>
                        {divs.map(div => (
                            <div className="col-lg-2 col-md-3 py-1 champs champsb cptc2 mt-2" key={div.id}>
                                <div className="row txthv txtv">

                                    <span className="col-lg-9 "> {div.content}</span>

                                    {/* <div class=" col-lg-1 px-1 " onClick={() => supprimerDiv(div.content)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x txthv" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>





                    <br />
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary btn-sou" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script src="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.jquery.min.js"></script>
        </>
    );
}