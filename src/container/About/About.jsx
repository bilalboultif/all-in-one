import React, { useState } from 'react';

import { images } from '../../components/constants';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../../client';
import './About.scss';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Picture from '../../media';

const About = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  let whid = window.location.href.split("/")[4];
  const newWhid = whid.slice(0, 4);
  console.log(newWhid);
   let google = "https://rodeo.amazon.com/" + newWhid
  const [location , setLocation] = useState(`${whid}`);
console.log(location);

  return (
    <>
      <h3 className="head-text">Any question /issue & chat with us</h3>

      <div className="app__about-cards">
        <div className="app__about-card " >
          <img src={images.slack} alt="email" />
          <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">All amazonians IND1</a>
          
        </div>
        
        <div className="app__about-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (317) 654-7704" className="p-text">+1 (317) 654-7704</a>
        </div>
      </div>
      <Card  className="box"  style={{ borderRadius:30, border:1 }}>
                        <Card.Header >
                            <Row>
                              
                               
                            </Row>
                        </Card.Header>   

                            <Card.Body style={{padding: "20px", justifyContent: "center", display: "flex"}}>
                                <Card.Img variant="top" src={Picture.Account} style={{width: 100, height: 100}}/>
                            </Card.Body>

                        <Card.Footer style={{padding: "10px", justifyContent: "center", display: "flex"}}>
                            <Link to={`/all-in-one/${whid}/rad`}>
                                <Button style={{borderRadius:"50px", backgroundColor:"black", border:"1px solid black", boxShadow:"1px 10px 5px gray"}} variant="primary">Create Ticket</Button>
                            </Link>
                        </Card.Footer>
                        </Card>
    
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);