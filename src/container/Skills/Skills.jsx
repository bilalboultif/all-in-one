import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../components/constants';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../../client';
import './Inbound.scss';
import {useParams} from 'react-router-dom'

const Inbound = () => {
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
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">{
            newWhid
          }</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Inbound</p>
          <p className="p-text">Tools</p>
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
      <img src={images.delivery} alt="profile_bg" />
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
      {[images.flutter, images.amazon, images.bgIMG].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    
  </div>
  <h3 className="head-text">{newWhid} Wecome to Inbound </h3>

<div className="app__footer-cards">
  <div className="app__footer-card " >
    <img src={images.about01} alt="email" />
    <a href={google} target='_blank' className="p-text">ICQA</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.slack} alt="email" />
    <a href="https://pslip-web-na.amazon.com/" className="p-text">STOW</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.about02} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">Recieve</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.about04} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">ISS</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.nb} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">All amazonians IND1</a>
    
  </div>
  
 
</div>
    
    </>
  );
};


export default AppWrap(
  MotionWrap(Inbound, 'app__inbound'),
  'inbound',
  'app__whitebg',
);
