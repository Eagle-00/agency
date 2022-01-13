import React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';

const style = {
  width: '100%',
  height: 550,
  filter: 'brightness(0.7)',
};

export const OfferCardItem = ({ header, footer, img }) => (
  <Card className='border-0 shadow-lg'>
    <Card.Header
      className='text-center text-capitalize text-secondary'
      style={{ fontWeight: 'bolder' }}>
      {header}
    </Card.Header>
    <img src={img} alt="Card Image" className='img-fluid' style={style}/>
    <Card.Footer
      className='text-center text-capitalize text-secondary'
      style={{ fontWeight: 'bolder' }}>
      {footer}
    </Card.Footer>
  </Card>
);

OfferCardItem.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
};
