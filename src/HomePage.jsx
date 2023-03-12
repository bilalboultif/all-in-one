import React, { useEffect } from 'react';
import './App.css';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/item';
import ItemDetails from './components/ItemDetails';

import RAD from './components/Rad'
import { About, Footer, Header, Outbound,Login } from './container';
import Inbound from './container/Skills/Skills';



const HomePage = () => {
 

  return (
    <>

<React.Fragment>

      
      
           
     
      <Navbar />
       <Header />
       <About />
        
       <Outbound/>
      <Inbound/>
      <Footer />
       <Login/>
   
        </React.Fragment>


</>
);
};

export default HomePage
