import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' Component={Signup}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App