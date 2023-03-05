import React, {useContext, useEffect, useState} from 'react'
import {DataContext} from './DataProvider'
import {Link, useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

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
export default function Items() {
    const value = useContext(DataContext)
    const [itemsList] = value.itemsList
    const [filteredItems, setFilteredItems] = useState(itemsList)
    let {whid} = useParams();

    function getBadgeColor(departments: string) {
        switch (departments) {
            case 'IT':
                return 'primary';
            case 'RME':
                return 'warning';
            case 'HR':
                return 'success';                                                                                           
            case 'LP':
                return 'danger'; 
            case "RAD":
                return 'info';                                                                                                                                                               
                                                                        
        }
    }
    
// filter function that takes in filtered items and sets the state of filtered items to the filtered items
    const filter = (items: Item[], query: string) => {
        if (!query) {
            return items;
        }
        return items.filter((item) => {
            const itemTitle = getTags(item).join(' ');
            return itemTitle.includes(query);
        });
    };

    //function that runs trough each given item and returns each tag in the item
    const getTags = (item: Item) => {
        return item.tags.map((tag) => {
            return tag;
        });
    };
 

    // search function that takes in the event and sets the state of filtered items to the filtered items
    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        const filteredItems = filter(itemsList, query.toUpperCase());
        setFilteredItems(filteredItems);    
    };



    return (

        <Container style = {{minWidth: "85%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>

        <Form.Floating style={{width: "60%", margin: "30px"}}>
            <Form.Control
              id="floatingInputCustom2"
              type="text"
              style={{backgroundColor: "rgba(42, 30, 30, 0.472)", color: "white", marginBottom:30, borderRadius:30, border:1}}
              placeholder="Search for an item, department, tag, workstation etc."
              onChange={search}
              />
       
          </Form.Floating>
            <Row  className="scroll-container"  id="assets" Row >
                {
                filteredItems.map( (product: Item) => ( 
                console.log(product),
                console.log(Picture[product.images]),


                    <Col id="scroll-page"  style={{padding: "20px", justifyContent: "left", display: "flex", backgroundColor:"rgba(42, 30, 30, 0.472)"}}>
                        <Card  className="box"  style={{ borderRadius:30, border:1 }}>
                        <Card.Header >
                            <Row>
                                <Col md={9}>
                                    <Card.Title>{product.title}</Card.Title>
                                </Col>
                                <Col md={3}>
                                    <Badge style={{justifyContent: "center", display: "flex"}} pill bg={getBadgeColor(product.department)} text="light"> {product.department} </Badge>
                                </Col>
                            </Row>
                        </Card.Header>   

                            <Card.Body style={{padding: "20px", justifyContent: "center", display: "flex"}}>
                                <Card.Img variant="top" src={Picture[product.images]} style={{width: 100, height: 100}}/>
                            </Card.Body>

                        <Card.Footer style={{padding: "10px", justifyContent: "center", display: "flex"}}>
                            <Link to={`/all-in-one/${whid}/${product._id}`}>
                                <Button style={{borderRadius:"50px", backgroundColor:"black", border:"1px solid black", boxShadow:"1px 10px 5px gray"}} variant="primary">Create Ticket</Button>
                            </Link>
                        </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
    </Container>

    )
}
