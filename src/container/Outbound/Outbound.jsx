import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../components/constants';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../../client';
import './Outbound.scss';
import {useParams} from 'react-router-dom'

const Outbound = () => {
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
          <p className="p-text">Outbound</p>
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
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    
  </div>
  <h3 className="head-text">{newWhid} Outbound Shipping orders </h3>

<div className="app__footer-cards">
  <div className="app__footer-card " >
    <img src={images.about01} alt="email" />
    <a href={google} target='_blank' className="p-text">Pick</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.about02} alt="email" />
    <a href="https://pslip-web-na.amazon.com/" className="p-text">AFE</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.api} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">Singles</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.git} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">Multis</a>
    
  </div>
  <div className="app__footer-card " >
    <img src={images.about01} alt="email" />
    <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">Vendor Return</a>
    
  </div>
  
  <div className="app__footer-card">
    <img src={images.mobile} alt="phone" />
    <a href="tel:+1 (317) 654-7704" className="p-text">+1 (317) 654-7704</a>
  </div>
</div>
    
    </>
  );
};


export default AppWrap(
  MotionWrap(Outbound, 'app__outbound'),
  'outbound',
  'app__whitebg',
);
