import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import { Parallax } from "react-parallax";
import '../css/cta.css';
import {Link} from "react-router-dom";

const style = {
  filter: 'brightness(0.2)',
  background: 'rgba(0,0,0,0.7)',
};

export const CtaSection = () => (
  <section id='cta'>
    <Parallax
      blur={{ min: -40, max: 20 }}
      bgImage={require('../img/parallax/cta-bg.jpg')}
      bgImageAlt='Cta bg Image'
      strength={-200}
      bgImageStyle={style}
    >
      <Container className='p-5'>
        <Row>
          <Col md={9}>
            <h3 className='mt-5'>N'attendez plus</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </p>
          </Col>

          <Col md={3}>
            <Link to='#!' className='cta-btn text-decoration-none'>
              Passez à l'action
            </Link>
          </Col>
        </Row>
      </Container>
      <div style={{ height: 100 }} />
    </Parallax>
  </section>
);
