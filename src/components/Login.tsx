import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useState, useEffect } from 'react';
import Images from '../media/index'
import {Link} from 'react-router-dom'
// import Cookies from 'js-cookie';
import { fileURLToPath } from 'url';
import { images } from './constants';
import Typewriter from 'typewriter-effect';
type login = {
  location: string;
  currentLocation: string;
  value : HTMLTextAreaElement;

}


function Login() {
  let currentLocation = "IND1";
const [visible,setVisible] = useState(false)
  const [location, setLocation] = useState(currentLocation);
  const URL = '/all-in-one/' + location;
console.log(location)
console.log(URL)

  const visibility = document.getElementById('visibility')
  


  return (
    <Container style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "10px" }}>
      <Card className='visibility' id={'visibility'} style={{marginTop:100}}>
        <Form style={{ marginTop: "50px", marginBottom: "30px" }}>
          <Card.Img variant="top" src={Images.Amazon} style={{opacity:0.8,width:"400px", height:"150px", borderRadius:10, boxShadow: "10px 10px 10px"  }} />
          
          <Dropdown style={{ width: "80%", marginLeft: "35px", marginTop: "10px", height: "60px"}}  >
          <Form.Label style={{ justifyContent: "center", alignItems: "center", display: "flex",  marginTop: "30px", color:"white", fontWeight:"bold", textShadow:"1px 1px 5px black"}} htmlFor="inputPassword5">Current Location: </Form.Label>
            <Dropdown.Toggle variant="info" id="dropdown-basic" style={{backgroundColor:"black",color:"white", width: "50%", marginLeft: "-15px", marginTop: "10px", height: "40px", borderRadius:50, border:"1px solid black"}}>
              {location}
            </Dropdown.Toggle>

            <Dropdown.Menu className='drop-menu' >

              {/* <Dropdown.Item href="#/action-1">{location}</Dropdown.Item> */}

              <Row  style = {{ justifyContent: "center" , alignItems: "center", display: "flex"

              }}
              >
            <Col  xs={9} md={9}>
    
              <Form.Floating style={{ display: "none"}}>
                
                <Form.Control/>
 </Form.Floating>



<Form.Floating style={{width: "40%", marginLeft: "15px", marginTop: "10px", height: "40px", paddingTop:"1rem,",paddingBottom:"1rem"}}>
 
                        <Form.Control
                        required
                        id="locationButton"
                        type="text"
                        onChange={event => setLocation(event.target.value.toUpperCase())} 
                        maxLength={35}
                        
                        />
                                  <Form.Control.Feedback type="invalid">
            Please provide a valid WHID.
          </Form.Control.Feedback>
                        <label  style={{textAlign:"center", width:100}} htmlFor="floatingInputCustom" >IND1</label>
                    </Form.Floating>

              </Col>


              <Col xs={2} md={3}>
              


              <Link style={{ width: "70%", marginLeft: "-35px", marginTop: "20px", height: "40px"}} to={`/all-in-one/${location}`}>
                  {/* <Button style={{marginRight: "10px"}} variant="success" >Ok</Button> */}
                  <Button  onClick={() => window.open(URL)} variant="success" target='_parent' style={{ marginTop:10, backgroundColor:"black",border:"1px solid black", borderRadius:10,boxShadow: "0px 0px 10px"}}> Ok </Button>

                </Link>

                </Col>





                </Row>
              <Dropdown.Divider />
              <Dropdown.Header className='dropLocation'>
              <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Please enter your WHID')
       
          .pauseFor(2500)
          .deleteAll()
          .typeString('the WHID is case sensitive')
          .deleteAll()
          .typeString('we will be IN the warehouse')
          .start();
      }}
    />
              </Dropdown.Header>


            </Dropdown.Menu>

          </Dropdown>



        </Form>
{/* 
        <Link to={`/all-in-one/${location}`}>

          
    <Button style={{ margin: "50px" }} variant="success" >Continue</Button>
</Link> */}

<Button style={{margin:50,marginLeft:0, borderRadius:50, backgroundColor:"navy", border:"1px solid navy", boxShadow:"1px 1px 5px"}}  onClick={() => window.open(URL,"_self")} variant="success" > Continue </Button>


      </Card>


    </Container >
  );
}


export default Login;