import React from "react";
import './css/about.css';
import {Col, Container, Row} from "react-bootstrap";
import {PageTitleSection} from "../views/sections/PageTitleSection";
import {AboutSection} from "../views/sections/AboutSection";
import {CtaSection} from "../views/sections/CtaSection";
import {PartnersSection} from "../views/sections/PartnersSection";

const AboutPage = () => {
  return (
    <>
      <div id='about' className='about mb-5'>
        <Container>
          <PageTitleSection title='À propos'/>
          <Row className='content text-dark'>
            <Col md={6}>
              <p className='text-dark'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li className='mb-5'>
                  <i className="fas fa-check-double"/>{' '}
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
                <li className='mb-5'>
                  <i className="fas fa-check-double"/>{' '}
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </li>
                <li className='mb-5'>
                  <i className="fas fa-check-double"/>{' '}
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </Col>

            <Col md={6} className='pt-4 pt-lg-0'>
              <p className='text-dark'>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <AboutSection/>
      <CtaSection/>
      <PartnersSection/>
    </>
  )
};

export default AboutPage;
