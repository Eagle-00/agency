import React from "react";
import PropTypes from 'prop-types';

export const PageTitleSection = ({ title, children }) => (
  <div className="app-title">
    <h2>{title}</h2>
    {children && children}
  </div>
);

PageTitleSection.propTypes = { title: PropTypes.string.isRequired };
