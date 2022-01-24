import React, { useState, useEffect } from 'react'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import App from "../App";
import DocumentDetails from './DocumentDetails';
import SignIn from './SignIn';
import Navbar from './Navbar'
import NewDocument from './NewDocument'
import UpdateDocument from "./UpdateDocument";

export default function Layout({children}) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user = user && JSON.parse(user)
    !user 
    user ? setAuth(user) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(auth));
  }, [auth]);

  const handleLogout = () => {
    localStorage.removeItem("user")
    setAuth(false)
  }

  return (
    <>
    {auth && (<Navbar logout={handleLogout} currentUser={auth}/>)}
    <Routes>
    {!auth && (
        <Route
          path="/signin"
          element={<SignIn authenticate={(user) => setAuth(user)}/>}
          
          />
      )}
      {auth && (
        <>
          <Route path="/" element={<App />} />
          <Route path="/document/:id" element={<DocumentDetails />} />
          <Route path="/new-document" element={<NewDocument currentUser={auth}/>} />
          <Route path="/update-document/:id" element={<UpdateDocument currentUser={auth}/>} />
        </>
      )}
      <Route path="*" element={<Navigate to={auth !== false ? "/" : "signin"} />} />
      {children}
    </Routes>
    
    </>
  )
}
