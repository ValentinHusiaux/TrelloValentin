import React, { useState } from 'react';
import { TableauContext } from './context';
import { ConnectRouter } from './router/connectRouter';
import { TableauRouter } from './router/tableauRouter.jsx';




const listes = [{ id:"1" , titre: "Mon premier tableau" , content: [
  {
    id:"1", titre2: "Début", cotenttab : [
      
      { id:"1", titreInterieur: "Inté1", cotentelement : "BLALALABLALBAL"},
      { id:"2", titreInterieur: "Inté2", cotentelement : "BLALALABLALBAL"},
      { id:"3", titreInterieur: "Inté3", cotentelement : "BLALALABLALBAL"},
    ]
  }
]},
{ id:"2" , titre: "Mon deuxiéme tableau" , content: [
  {
    id:"1", titre2: "Début", cotenttab : [
      
      { id:"1", titreInterieur: "Inté1", cotentelement : "BLALALABLALBAL"},
      { id:"2", titreInterieur: "Inté2", cotentelement : "BLALALABLALBAL"},
      { id:"3", titreInterieur: "Inté3", cotentelement : "BLALALABLALBAL"},
    ]
  }
]}]


export default function App() {
  const [user, setUser] = useState({});
  const [idTableau, setIdTableau] = useState({});
  return (
    <TableauContext.Provider value={{ 
      user, setUser, listes, idTableau, setIdTableau
    }}>
      {(user.email) ? <TableauRouter /> : <ConnectRouter />}
    </TableauContext.Provider>
  )
}



