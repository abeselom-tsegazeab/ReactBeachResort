import React from 'react';
import "./App.css"
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import WithRouter from './components/WithRouter'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
        <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/rooms' Component={Rooms}/>
        <Route path='/rooms/:slug' Component={WithRouter(SingleRoom)}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
