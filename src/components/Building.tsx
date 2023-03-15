import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useNavigate , useParams} from "react-router-dom";
import { images } from './constants';


function Building() {
    const whid = window.location.href.split("/")[4];
    const newWhid = whid.slice(0, 4);
    console.log(newWhid);
     let google = "https://rodeo.amazon.com/" + newWhid
    const [location , setLocation] = useState(`${whid}`);
    const locationL = location.toLowerCase();
  console.log(location);
  
    const navigate = useNavigate()
    function handleBack(): void {
        navigate('/all-in-one/'+whid);
   

  
        

      }
     
  
       

  return (
    <Container style = {{minWidth: "80%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginTop: "50px", maxHeight: "100%"
        }}>
    <Card className='visibility' id={'visibility'}  style={{ width: '30rem' , color:"white",borderRadius:"10px 50px"}}>
      <Card.Body>
        <Card.Title>Building</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Amazon Warehouse, Fulfillment Center</Card.Subtitle>
        <Card.Text style={{marginTop: "50px", marginBottom: "30px"}}>
          Please click on inside amazon for more information about the building or go directly to wiki page for the policies 
        </Card.Text>

      </Card.Body>
      
      
<>
<div className="app__footer-cards">
  <div className="app__footer-card " >
    <img src={images.about01} alt="email" />
    <a href="https://search.amazon.work/search?country=us&language=en&k=${locationL}&r=true&q=${locationL} &page=1&fromRedirect=1" target='_blank' className="p-text">Inside Amazon</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.slack} alt="email" />
    <a href="https://pslip-web-na.amazon.com/" className="p-text">Wiki Page</a>
    
  </div>
  
  <Button style={{margin: "50px", backgroundColor:"black"}}variant="danger" onClick={() => handleBack()}>Back</Button>
 
</div>
</>

    </Card>
    
    </Container>
  );
}

export default Building