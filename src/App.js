import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages';
import Signin from './pages/Signin';




function App() {
 
  return (
    

    <Router>
      <Routes>
      <Route  path='/' element={<Home />} exact >
      
        </Route>
         <Route  path='/signup' element={<Signin />} exact >
      
        </Route>
        </Routes>
    </Router>


    
     

    
  );
}

export default App;
