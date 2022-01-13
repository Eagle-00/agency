import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {PageTitleSection} from "../views/sections/PageTitleSection";
import './css/contact.css';
import {ContactFormSection} from "../views/sections/ContactFormSection";
import {ContactMapSection} from "../views/sections/ContactMapSection";
import {CtaSection} from "../views/sections/CtaSection";
import {PartnersSection} from "../views/sections/PartnersSection";

const ContactPage = () => {
  return (
    <>
      <div id="contact" className="contact mb-5">
        <Container>
          <PageTitleSection title='Contact'>
            <p className='text-dark' style={{ fontWeight: 'bold' }}>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci
              expedita at voluptas atque vitae autem.
            </p>
          </PageTitleSection>

          <Row className='mb-5'>
            <Col md={6}>
              <Card className='border-0 shadow-lg'>
                <Card.Body className='text-center'>
                  <i className='fas fa-location-arrow fa-2x text-primary'/>
                  <h3 className='text-capitalize text-secondary'>Notre adresse</h3>
                  <p className='text-secondary'>A108 Adam Street, New York, NY 535022</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='border-0 shadow-lg'>
                <Card.Body className='text-center'>
                  <i className='fas fa-envelope fa-2x text-primary'/>
                  <h3 className='text-capitalize text-secondary'>Email</h3>
                  <p className='text-secondary'>adi.life91@gmail.com</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='border-0 shadow-lg'>
                <Card.Body className='text-center'>
                  <i className='fas fa-phone-volume fa-2x text-primary'/>
                  <h3 className='text-capitalize text-secondary'>Appel</h3>
                  <p className='text-secondary'>+243 843 210 565</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <ContactMapSection/>
            </Col>
            <Col md={6}>
              <ContactFormSection/>
            </Col>
          </Row>
        </Container>
      </div>

      <CtaSection/>
      <PartnersSection/>
    </>
  )
};

export default ContactPage;
