import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


import Demandeemp2 from './pages/Demandeemp2';
import Demandeemp1 from './pages/Demandeemp1';
import Demandeemp3 from './pages/Demandeemp3';
import Demandeemp4 from './pages/Demandeemp4';

import PostulerDemande from './components/PostulerDemande';


import Homep from './pages/Homep';
import FindJob from './components/Findjob';

import Job from './components/Job';

import MesDemandes from './components/MesDemandes';
import DemandesByJob from './components/DemandesByJob';

import Rolep from './pages/Demandeemp1 copy';
import Signupdem from './components/Signupdem';
import Demandeemp0 from './pages/Demandeemp0';

import Login from './components/Login';

import HomeDemandeur from './components/HomeDemandeur';
import Confirm from './components/Confirm';

import Demande from './components/Demande';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Homep />,
  },
  {
    path: "App",
    element: <App />,
  },




  {
    path: "demande d'emploie/2/:idDemandeur",
    element: <Demandeemp2 />,
  },
  {
    path: "demande d'emploie/1/:idDemandeur",
    element: <Demandeemp1 />,
  },
  {
    path: "demande d'emploie/3",
    element: <Demandeemp3 />,
  },
  {
    path: "demande d'emploie/4",
    element: <Demandeemp4 />,
  },
  {
    path: "demande d'emploie/0/:idDemandeur",
    element: <Demandeemp0 />,
  },
  {
    path: "home",
    element: <Homep />,
  },
  {
    path: "findjob/:idDemandeur",
    element: <FindJob />,
  },

  {
    path: ":id/postulerDemande",
    element: <PostulerDemande />,
  },
  // {
  //   path: "job",
  //   element: <Job />,
  // },
  {
    path: "/jobs/:idJob",
    element: <Job />,
  },
  
  {
    path: "MesDemandes/:idDemandeur",
    element: <MesDemandes />,
  },

  {
    path: "demandesByJob/:idJob/:idEmployeur",
    element: <DemandesByJob />,
  },

  {
    path: "signupRole",
    element: <Rolep />,
  },
  {
    path: "signup/demandeur",
    element: <Signupdem />,
  },
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "HomeDemandeur/:id",
    element: <HomeDemandeur />,
  },
  {
    path: "confirm/:email",
    element: <Confirm/>,
  },
  
  {
    path: "demande/:idEmployeur/:idJob/:idDemande",
    element: <Demande />,
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
