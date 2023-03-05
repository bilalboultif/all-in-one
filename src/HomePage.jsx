import React, { useEffect } from 'react';
import './App.css';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/item';
import ItemDetails from './components/ItemDetails';
import Login from './components/Login'
import RAD from './components/Rad'
import { About, Footer, Header, Skills, Work } from './container';


const HomePage = () => {
 

  return (
    <>

<React.Fragment>

      
      
           
     
      <Navbar />
       <Header />
       <About />
        <Footer />
       
        <Skills />
       
   
        </React.Fragment>


</>
);
};

export default HomePage
