import React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';

export const CardBody = ({content, title, icon}) => (
  <Card className='shadow-lg border-0 mt-2'>
    <Card.Body className='text-center'>
      <i className={`${icon} text-primary`}/>
      <Card.Title style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Card.Title>
      {content}
    </Card.Body>
  </Card>
);

CardBody.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
