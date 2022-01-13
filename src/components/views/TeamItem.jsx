import React from "react";
import PropTypes from 'prop-types';

export const TeamItem = ({img, icons, name, role}) => {
  return (
    <>
      <div className="member">
        <div className="member-img">
          <img src={img} alt="Team img 1" className="img-fluid"/>
          <div className="social">
            {icons.map(icon => (
              <a href={icon.link} target='_blank' key={icon.id}>
                <i className={icon.icon}/>
              </a>
            ))}
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </>
  )
};

TeamItem.propTypes = {
  img: PropTypes.any.isRequired,
  icons: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
