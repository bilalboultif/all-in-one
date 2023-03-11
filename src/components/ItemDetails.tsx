import React,{useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from './DataProvider'
import {useNavigate} from 'react-router-dom'
import { Container, Card, Button, Form, Dropdown, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { images } from '../components/constants'
import Typewriter from 'typewriter-effect';
import NavDetails from './NavDetails';
import './NavDetails.scss';
//tsx declaration
import FloatingLabel from 'react-bootstrap/FloatingLabel';




import Radio from '../media/Radio.jpg';
import CCTV from '../media/CCTV-Camera.jpg';
import CLOCK from '../media/Clock-In.jpg';
import COWBattery from '../media/COW-Battery.jpg';
import COWInvertor from '../media/COW-Invertor.jpg';
import Deskradio from '../media/Desk-radio.jpg';
import Desktop from '../media/Desktop.jpg';
import DockingStation from '../media/Docking-Station.jpg';
import FasternalMachine from '../media/Fasternal-Machine.jpg';
import HPPrinter from '../media/HP-Printer.jpg';
import HPThinClient from '../media/HP-ThinClient.jpg';
import iPhone from '../media/Mobile.jpg';
import Monitor from '../media/PC-Screen.jpg';
import Projector from '../media/Projector.jpg';
import MC33Scanner from '../media/RF-Scanner.jpg';
import Tablet from '../media/Tablet.jpg';
import TC56 from '../media/TC56.jpg';
import TVScreen from '../media/TV-Screen.jpg';
import USBScanner from '../media/usbScanner.jpg';
import Yubikey from '../media/Yubikey.jpg';
import ZebraCardPrinter from '../media/Zebra-Card-Printer.jpg';
import ZebraPrinter from '../media/Zebra-Printer.jpg';
import ZebraMobilePrinter from '../media/Zebra-Mobile-Printer.jpg';
import ZebraSlamPrinter from '../media/Zebra-SLAM-Printer.jpg';
import Laptop from '../media/Laptop.jpg';
import COW from '../media/COW.jpg';
import BluetoothScanner from '../media/1991i-scanner.jpg';
import WATIT from '../media/WAT-IT.jpg';
import Account from '../media/Account.jpg';
import ALPR from '../media/ALPR.jpg';
import Genovation from '../media/Genovation.jpg';
import SpooScanner from '../media/spooScanner.png';
import FastRiver from '../media/fastRiverLogo.png';
import AccoladeIco from '../media/accolade.png';
import Pathfinder from '../media/Pathfinder.jpg';
import RAD from '../media/rad.png';



interface romanType {  // 👈 typing for the "romanNumber" object
    [key: string]: any;
  } 

const Picture : romanType= {
    Radio,
    CCTV,
    CLOCK,
    COWBattery,
    COWInvertor,
    Deskradio,
    Desktop,
    DockingStation,
    FasternalMachine,
    HPPrinter,
    HPThinClient,
    iPhone,
    Monitor,
    Projector,
    MC33Scanner,
    Tablet,
    TC56,
    TVScreen,
    USBScanner,
    Yubikey,
    ZebraCardPrinter,
    ZebraPrinter,
    ZebraMobilePrinter,
    ZebraSlamPrinter,
    Laptop,
    COW,
    BluetoothScanner,
    WATIT,
    Account,
    ALPR,
    Genovation,
    SpooScanner,
    FastRiver,
    AccoladeIco,
    Pathfinder,
    RAD

};

//declare datacontext types 
type Item = {
    _id: string,
    title: string,
    tags: Array<string>,
    department: string,
    search: string,
    itemsList: Item[],
    images : string,
    value : any,


}
type Picture = {
    _id: string,
    title: string,
    tags: Array<string>,
    department: string,
    search: string,
    itemsList: Item[],
    images : string,
    value : any,

}
interface ItemDetailsProps {
    whid: string;
    id: string;
    issue: string;
    level: string;
    location: string;
    station: string;
    asset: string;
    request: string;
    value: any;
    image: any;
    
}

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function Details() {
    const {whid} = useParams();
    const {id} = useParams();
    const {user} = useParams();
   
    const value = useContext(DataContext)
    const [itemsList] = value.itemsList
    const [filteredItems, setFilteredItems] = useState(itemsList)
    const [level , setLevel] = useState('')
    const [location , setLocation] = useState('')
    const [station , setStation] = useState('')
    const [asset , setAsset] = useState('')
    const [issue , setIssue] = useState('Select Issue / Request')
    const [request , setRequest] = useState('')  

    const [isIssueValid , setIsIssueValid] = useState(false)
    const [isCommentValid , setIsCommentValid] = useState(false)
    const navigate = useNavigate()
    const details = itemsList.filter((item: any) => item._id === id)
const image = itemsList.filter((image: any) => image.id === id)
console.log(details[0].images)


    function generateTicketInfo(): void {
      //generate a string that will be used to create a ticket title, if some of the variables are empty then do not include them in the title
      //example of a ticket title: [WHID] - User - Level - Location - Station - needs help with Item : Issue
      let ticketTitle = `[${whid?.toUpperCase()}] ${location}- needs help with ${details[0].title}`;
      //reduce the empty spaces to only 1 if there are multiple empty spaces and replace the spaces with %20 to be used in the url
      ticketTitle = ticketTitle.replace(/\s+/g, ' ').trim().replace(/ /g, "%20");
    console.log(details[0].department)
    let assignee = (whid + "-"+details[0].department).toLocaleLowerCase();
    console.log(assignee)
    let topDescription = 
                      details[0].title + " : " + issue +
                      '\n'+ level +
                      '\n'+ location +
                      '\n'+ station +
                      '\n'+ asset
    //remove lines only if they are empty
    topDescription = topDescription.replace(/^\s*[\r]*\n/gm, "");
    
    let topRequest =topDescription+
              '\n\n'+ request +
              '\n\nTicket created using t-corp.amazon.com';

      let ticketUrl = `https://t.corp.amazon.com/create/options?title=${ticketTitle}&description=${(topRequest.replace(/\n/g, "%0A").replace(/ /g, "%20"))}&ticket_type=Regular+Ticket&severity=FIVE&category=${details[0].CTI[0].Category}&type=${details[0].CTI[1].Type}&item=${details[0].CTI[2].Item}&group=${details[0].CTI[0].Category}-${whid?.toUpperCase()}&assignee=${assignee}&tags`;

      window.open(ticketUrl, "_blank");
    }

    function handleSubmit(): void {
      if (issue === "Select Issue / Request") {
          setIsIssueValid(true);
      } else if (request.length < 20) {
          setIsCommentValid(true);
      } else {
        setIsIssueValid(false);
        setIsCommentValid(false);
        generateTicketInfo();
        handleBack();        

          
      }
  }

    function handleBack(): void {
      navigate('/all-in-one/'+whid);
      
    }

  
    return (
        <form>
          <NavDetails />
             <div id="typer" style={{fontSize:30,color:"white", marginLeft:20, marginTop:20, textAlign:"left"}}>
      <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Please fill the following fields:')
       
          .pauseFor(2500)
          .deleteAll()
          .typeString('Describe your issue/request and click on the button below to create a ticket')
          .deleteAll()
          .typeString('we will be happy to help you')
          .start();
      }}
    />
    </div>
        <Container style = {{minWidth: "80%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row", marginTop: "-150px", maxHeight: "100%"}}>
     
          {/* {  console.log(details)} */}
    <Card style = {{borderRadius:"10px 50px 10px 50px", minWidth:'400px',marginLeft: "400px"}} >
          
    

            <Card.Header style={{fontWeight:"bold"}} >{details[0].title}</Card.Header>
            <Card.Body style={{marginLeft: "20px"}}>
            
            <FloatingLabel
        controlId="floatingInput"
        label="Floor Level: "
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Floor Level: " 
          onChange={event => setLevel(
            //if the value is empty ( because was deleted by user ) then set it to empry string
            event.target.value === "" ? "" :
            //if the value is not empty then add the word "Floor" before the value
            "Floor " + event.target.value)}
            />
      </FloatingLabel>
            
      <FloatingLabel
        controlId="floatingInput"
        label="Location: (AFE, Pack, Pick, Stow ...) "
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Location: (AFE, Pack, Pick, Stow ...) " 
            onChange={event => setLocation(
              //if the value is empty ( because was deleted by user ) then set it to empry string
              event.target.value === "" ? "" :
              //if the value is not empty then add the word "Floor" before the value
              event.target.value.toUpperCase())}
            />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Station Number:"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Station Number:" 
            onChange={event => setStation(
              //if the value is empty ( because was deleted by user ) then set it to empry string
              event.target.value === "" ? "" :
              //if the value is not empty then add the word "Floor" before the value
              "Station " + event.target.value.toUpperCase())}
            />
      </FloatingLabel>

 
      <FloatingLabel
        controlId="floatingInput"
        label="Asset Or Serial Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Asset Or Serial Number" 
            onChange={event => setAsset(
              //if the value is empty ( because was deleted by user ) then set it to empry string
              event.target.value === "" ? "" :
              //if the value is not empty then add the word "Floor" before the value
              "AN/SN " +event.target.value)}
            />
      </FloatingLabel>

 
                          
                              <Dropdown >
                              <Dropdown.Toggle variant="info" id="dropdown-basic" style={{width: "80%", marginLeft: "35px", marginTop: "30px"}}>
                              {issue} 
                              </Dropdown.Toggle>
          
                              <Dropdown.Menu style={{width: "75%", marginLeft: "10px"}}>
                              {details[0].commonIssues.map((item : Object) => (
                                <Dropdown.Item onClick={event => setIssue(Object.values(item)[0])}>{Object.values(item)[0]}</Dropdown.Item>))}
                           
                                
                        <Form.Floating style={{width: "90%", margin: "10px", }}>
                        <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        onChange={event => setIssue(event.target.value === "" ? "" : event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1) )}
                        maxLength={35}
                        />
                        <label htmlFor="floatingInputCustom">Other</label>
                    </Form.Floating>
                </Dropdown.Menu>
            
                </Dropdown>
                { isIssueValid && (
        <Form.Label style={{ color: 'red', textAlign: 'center'}}>Please select one of the issues above</Form.Label>
      ) }



 
                    <Form.Group style={{ marginRight: "20px"}} controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{marginTop: "30px"}}>Please enter detalis about your issue/request bellow:</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={event => setRequest(event.target.value)} />
                    </Form.Group>
                    { isCommentValid && (
        <Form.Label style={{ color: 'red', textAlign: 'center'}}>Please enter details about your issue</Form.Label>
      ) }

 
                <Col style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "10px", marginTop: "30px"}} 
                >
                <Button variant="success" onClick={() => handleSubmit()}>Submit</Button>
                <Button style={{marginRight: "20px"}}variant="danger" onClick={() => handleBack()}>Back</Button>
                </Col>
            </Card.Body>
            </Card>
          <motion.div
          style={{display: "flex",  flexDirection: "column", marginTop: "50px", width: "120%"}}
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      
      id='item-circle'
    >
      
   {[Picture.flutter, Picture.redux,Picture.sass].map((circle, index) => ( 
    <>

        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={Picture[details[0].images]} alt="profile_bg" />
   
        </div>
        </>
      ))}
         <Typewriter 
      onInit={(typewriter) => {
        typewriter.typeString('Discribe your issue/request')
       
          .pauseFor(2500)
          .deleteAll()
          .typeString('make sure to be as detailed as possible')
          .deleteAll()
          .typeString('put the floor level')
          .start();
      }}
    />
    </motion.div>
    
 
           
        
        </Container>
       
        </form>

    )
}
