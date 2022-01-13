import React, {useState} from "react";
import {Container, Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './css/menus.css';
import {TopBarMenu} from "./TopBarMenu";
import logo from './img/mmdrc-150x150.png';

const MainMenu = () => {

  return (
    <>
      <TopBarMenu/>

      <header id="header" className='fixed-top'>
        <Navbar collapseOnSelect bg='white' expand='lg'>
          <Container>
            <Navbar.Brand href="/home">
              <img src={logo} alt="MMDRC Agency" style={{ width: 37 }}/>{' '}
              MMDRC Agency
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-lg-auto">
                <Nav.Item className='nav-item-space'>
                  <NavLink to='/home'>Home</NavLink>
                </Nav.Item>
                <Nav.Item className='nav-item-space'>
                  <NavLink to='/about'>À propos</NavLink>
                </Nav.Item>
                <Nav.Item className={'nav-item-space'}>
                  <NavLink to='/services'>Nos services</NavLink>
                </Nav.Item>
                <Nav.Item className='nav-item-space'>
                  <NavLink to='/offers'>Nos offres</NavLink>
                </Nav.Item>
                <Nav.Item className='nav-item-space'>
                  <NavLink to='/contact'>Contact</NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
};

export default MainMenu;
