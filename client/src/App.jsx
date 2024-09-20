import React from 'react'
import './App.css'
import Login from './Pages/Login.jsx'
import Features from './Pages/Features.jsx'
import Generator from './Pages/Generator.jsx'
import Home from './Pages/Home.jsx'
import Creators from './Pages/Creators.jsx'
import Signup from './Pages/Signup.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LikeImages from './Pages/LikeImages.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/aigenerator' element={<Generator/>} ></Route>
      <Route path='/features' element={<Features/>} ></Route>
      <Route path='/creators' element={<Creators/>} ></Route>
      <Route path='/liked' element={<LikeImages/>}></Route>
    </Routes>
    </BrowserRouter>  
      
    </>
  )
}

export default App
