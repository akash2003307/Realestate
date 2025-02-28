import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup';
import './App.css'

const App = () => {
    const [loggedIn,setLoggedIn]=useState(false); 
  return (
    <BrowserRouter>
    <Navbar username={username} role={role} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App