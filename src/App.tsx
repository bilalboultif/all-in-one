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

import HomePage from './HomePage';
import Outbound from './container/Outbound/Outbound';
import Building from './components/Building';





function App() {




  return (
    <DataProvider>
    <div className="App" >
      <Router>
        
    

        <section>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="all-in-one/" element={<Login />} />
           <Route path='all-in-one/:whid' element={<HomePage/>}/>
           <Route path='/all-in-one/:whid/:id' element={<ItemDetails />} />
   
            <Route path="/all-in-one/:whid/rad" element={<Building />} />
           
          </Routes>
        </section>
       
      </Router>

    </div>
  </DataProvider>

  );
}

export default App;




function MainPage() {
  
  let userLocation = "IND1"

  useEffect(() => {
    function redirectToMainPage() {
      window.location.href = `http://localhost:3000/all-in-one/${userLocation}/`;
    }
    if (window.location.href === "http://localhost:3000/all-in-one/") {
      redirectToMainPage();
    }
  }, []);


  return (

    <></>

  )

}
function SitePage() {
  return (
    <div>SitePage</div>
  )
}
function Asset() {
  return (
    <div>Asset</div>
  )
}
function Admin() {
  return (
    <div>Admin</div>
  )
}

function Main() {
  return (
    <>
      {/* <Search /> */}
      <Items />

    </>
  )
}