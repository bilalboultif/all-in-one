import React, { useState } from 'react';

import { images } from '../../components/constants';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../../client';
import './Work.scss';

const Work = () => {
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

  return (
    <>
      <h3 className="head-text">Any question /issue & chat with us</h3>

      <div className="app__footer-cards">
        <div className="app__footer-card " >
          <img src={images.slack} alt="email" />
          <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">All amazonians IND1</a>
          
        </div>
        <div className="app__footer-card " >
          <img src={images.slack} alt="email" />
          <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">All amazonians IND1</a>
          
        </div>
        <div className="app__footer-card " >
          <img src={images.slack} alt="email" />
          <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">All amazonians IND1</a>
          
        </div>
        <div className="app__footer-card " >
          <img src={images.slack} alt="email" />
          <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">All amazonians IND1</a>
          
        </div>
        <div className="app__footer-card " >
          <img src={images.slack} alt="email" />
          <a href="https://amzn-operations.slack.com/archives/C04R7MWPK45" className="p-text">All amazonians IND1</a>
          
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
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
