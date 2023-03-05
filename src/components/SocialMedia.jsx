import React from 'react';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { SiAmazonaws } from "react-icons/si";
import { FaFacebookF } from 'react-icons/fa';
import { hover } from '@testing-library/user-event/dist/hover';

const SocialMedia = () => (
  <div className="app__social" style={{color:"white", width:"10px"}} >
    <div >
      <AiFillAmazonCircle />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <SiAmazonaws  />
    </div>
  </div>
);

export default SocialMedia;
