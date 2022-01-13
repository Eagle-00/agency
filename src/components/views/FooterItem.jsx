import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

export const FooterItem = ({ title, links }) => (
  <>
    <h4 className='text-capitalize'>{title}</h4>
    <ul>
      {links.map(link => (
        <li key={link.id}>
          <i className="fas fa-chevron-right"/>
          <Link to={link.to} className='text-capitalize'>
            {link.label} {link.icon && <i className={link.icon+' '+link.className}/>}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

FooterItem.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
