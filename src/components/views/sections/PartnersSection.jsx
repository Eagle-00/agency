import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../css/partner.css';
import partner1 from '../img/partners/1.JPG';
import partner2 from '../img/partners/2.webp';
import partner3 from '../img/partners/3.png';
import partner4 from '../img/partners/4.png';
import partner5 from '../img/partners/5.png';

export const PartnersSection = () => (
  <section id='cliens' className='cliens section-bg'>
    <h2 className='mt-3'>Nos partenaires</h2>
    <Container>
      <Row>
        <Col md={2} className='d-flex align-items-center justify-content-center me-5'>
          <img src={partner1} alt="" className="img-fluid"/>
        </Col>
        <Col md={2} className='d-flex align-items-center justify-content-center'>
          <img src={partner2} alt="" className="img-fluid"/>
        </Col>
        <Col md={2} className='d-flex align-items-center justify-content-center'>
          <img src={partner3} alt="" className="img-fluid"/>
        </Col>
        <Col md={2} className='d-flex align-items-center justify-content-center'>
          <img src={partner4} alt="" className="img-fluid"/>
        </Col>
        <Col md={2} className='d-flex align-items-center justify-content-center'>
          <img src={partner5} alt="" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  </section>
);
