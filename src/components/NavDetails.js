
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from './constants';
import {AiFillHome,AiFillBackward} from 'react-icons/ai'

import './Navbar.scss';
import HomePage from '../HomePage';

const NavDetails = () => {
  const [toggle, setToggle] = useState(false);

  let whid = window.location.href.split("/")[4];
  const newWhid = whid.slice(0, 4);


  return (
    <nav className="app__navbar-dt">
      <div className="app__navbar-dt-logo">
        <img src={images.logo1} alt="logo" />
      </div>
      <ul className="app__navbar-dt-links">
       
          <li className="app__flex p-text" key='home'>
            <div />
            <a id="home" href='/'>
                <AiFillHome />
            </a>
          </li>
          <li className="app__flex p-text" key='close'>
            <div />
            <Link to={`/all-in-one/${newWhid}`}>
            <AiFillBackward />
            </Link>
          </li>
       
      </ul>

      <div className="app__navbar-dt-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[<AiFillHome />, <AiFillBackward />].map((item) => (
                <li style={{backgroundColor:"black", borderRadius:50}} key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavDetails;