import React, { useState } from 'react';

import { images } from '../../components/constants';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../../client';
import './Footer.scss';
import Items from '../../components/item';

const Footer = () => {
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

    const IT = {
      _type: 'IT',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(IT)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h3 className="head-text">Any question /issue & chat with us</h3>

      <div className="app__footer-cards" style={{marginBottom:-180}}>
        <div className="app__footer-card " >
          <img src={images.slack} alt="email" />
          <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" target="_blank" className="p-text">Chat with IT</a>
          
        </div>
       
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="mailto:it-ind1@amazon.com" className="p-text">Send Email</a>
        </div>
       
      </div>
     <Items />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'IT',
  'app__whitebg',
);