import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../components/constants';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../../client';
import './Header.scss';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Picture from '../../media';

const Header = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const { username, email, message } = formData;
 
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
function MyComponent() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://maxis-service-prod-dub.amazon.com/users/whoami', {
          credentials: 'include', // include cookies in request (if applicable)
          headers: {
            'Content-Type': 'application/json', // set request content type
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Data</h2>
      <p>Name: {userData.username}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

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
     <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Welcome to</p>
            <h1 className="head-text">{
            newWhid
          }</h1>
          </div>
        </div>
        
        <div className="tag-cmp app__flex">
          <p className="p-text">All the info</p>
          <p className="p-text">of the Building</p>
        </div>
      </div>
    </motion.div>
    
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      border={{ opacity: [0, 1] }}
      borderRadius={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    
  </div>
  <div>
  <motion.div
      whileInView={{ opacity: [0, 1] }}
      border={{ opacity: [0, 1] }}
      borderRadius={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.bolt} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  
    <h3 className="head-text">{newWhid} Building</h3>
   
                     

                           

                            <Link to={`/all-in-one/${whid}/rad`}>
                                <Button style={{borderRadius:"50px", backgroundColor:"black", border:"1px solid black", boxShadow:"1px 10px 5px gray"}} variant="primary">Site Info</Button>
                            </Link>
                       
                      
  </div>
  

<div className="app__footer-cards">
  <div className="app__footer-card " >
    <img src={images.about01} alt="email" />
    <a href={google} target='_blank' className="p-text">HR</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.slack} alt="email" />
    <a href="https://pslip-web-na.amazon.com/" className="p-text">AMcare</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.slack} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">Learning</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.slack} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">Safety</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.slack} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">RME</a>
    
  </div>
  
  <div className="app__footer-card">
    <img src={images.mobile} alt="phone" />
    <a href="tel:+1 (317) 654-7704" className="p-text">+1 (317) 654-7704</a>
  </div>
</div>
<div>
   <MyComponent />
</div>
  
    </>
  );
};


export default AppWrap(
  MotionWrap(Header, 'app__home'),
  'home',
  'app__whitebg',
);
