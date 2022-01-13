import React from "react";
import './css/menus.css';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export const TopBarMenu = () => (
  <div id="topbar" className='d-none d-lg-flex align-items-center fixed-top'>
    <Container className="d-flex">
      <div className="contact-info me-auto">
        <i className='fas fa-envelope'/>{' '}
        <a href='mailto:#!' className='text-white text-decoration-none'>
          contact@example.com
        </a>

        <i style={{ marginLeft: 20 }} className='fas fa-phone-alt'/>{' '}
        {'+243 843 210 565'}

        <Link to='/blog' className='text-info nav-item-space mx-4 text-white'>
          <i className='fas fa-blog'/>
        </Link>
      </div>

      <div className="social-links">
        <Link to='#!' className='text-info nav-item-space'>
          <i className='fab fa-twitter'/>
        </Link>
        <Link to='#!' className='text-info nav-item-space'>
          <i className='fab fa-facebook'/>
        </Link>
        <Link to='#!' className='text-info nav-item-space'>
          <i className='fab fa-instagram'/>
        </Link>
        <Link to='#!' className='text-info nav-item-space'>
          <i className='fab fa-skype'/>
        </Link>
        <Link to='#!' className='text-info nav-item-space'>
          <i className='fab fa-linkedin'/>
        </Link>
      </div>
    </Container>
  </div>
);
