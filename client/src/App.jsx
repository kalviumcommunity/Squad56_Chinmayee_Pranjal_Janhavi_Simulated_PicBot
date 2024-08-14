import React from 'react'
import './App.css'
import './Pages/Login.jsx'
import Login from './Pages/Login.jsx'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Signup from './Pages/Signup.jsx'
import Generator from './Pages/Generator.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {

  return (
    <>
      {/* <Login/> */}
        {/* <Signup/> */}
        <Generator/>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
