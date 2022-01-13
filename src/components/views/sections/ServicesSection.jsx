import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {CardBody} from "../CardBody";
import '../css/service-section.css';

const content1 = 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi';
const content2 = 'Sed ut perspiciatis ' +
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cill';
const content3 = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia';
const content4 = 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi';

export const ServicesSection = () => {
  return (
    <>
      <Container id='service-section' className='mb-5'>
        <Row>
          <Col md={3}>
            <CardBody icon='fas fa-graduation-cap fa-3x' title='Étude' content={content1}/>
          </Col>
          <Col md={3}>
            <CardBody
              icon='fab fab fa-watchman-monitoring fa-3x'
              title='Tourisme'
              content={content2}/>
          </Col>
          <Col md={3}>
            <CardBody
              icon='fas fa-hand-holding-medical fa-3x'
              title='Médical'
              content={content3}/>
          </Col>
          <Col md={3}>
            <CardBody icon='fas fa-shopping-bag fa-3x' title='Travail' content={content4}/>
          </Col>
        </Row>
      </Container>
    </>
  )
};
