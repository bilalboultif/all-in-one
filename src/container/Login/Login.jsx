import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../components/constants';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../../client';
import './Login.scss';
import {useParams} from 'react-router-dom'


const Login = () => {
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
   let google = "http://fcmenu-iad-regionalized.corp.amazon.com/basic/login" 
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
            <p className="p-text">Hello, This is</p>
            <h1 className="head-text">{
            newWhid
          }</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">To access</p>
          <p className="p-text">Fc menu Tools</p>
          <p className="p-text">Click on Fc Login</p>
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
      <img src={images.Fclogin} alt="profile_bg"  id="profile-login" />
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
  <h3 className="head-text">Login {newWhid}</h3>


<div className="app__footer-cards">
  <div className="app__footer-card " >
    <img src={images.Badge} alt="email" />
    <a href={google} target='_blank' className="p-text">Fc  Login</a>
    
  </div>
 
  
  
</div>
    
    </>
  );
};


export default AppWrap(
  MotionWrap(Login, 'app__login'),
  'login',
  'app__whitebg',
);
