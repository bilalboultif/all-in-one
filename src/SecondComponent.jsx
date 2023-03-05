import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/item';
import ItemDetails from './components/ItemDetails';
import Login from './components/Login'
import RAD from './components/Rad'
import { About, Footer, Header, Skills, Work } from './container';
  
// First simple component with heading tag
function ScondComponent() {
return (
    <div>
    
      <Router>
        <Navbar />
        
    
        <Skills/>
       <Header />
       <Footer />
      </Router>
   
  </div>
);
}
export default ScondComponent;