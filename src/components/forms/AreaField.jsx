import React from "react";
import PropTypes from 'prop-types';

const style = {
  borderRadius: 0,
  fontSize: 14,
  boxShadow: 0,

};

export const AreaField = (
  {
    label,
    name,
    placeholder,
    value,
    onChange,
    error = ''
  }
) => (
  <>
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        style={style}
        name={name}
        className={`form-control${error && ' is-invalid'}`}
        id={name}
        placeholder={placeholder}
        value={value && value || ''}
        onChange={onChange}
        rows={6}
      />
      {error &&
      <span className="invalid-feedback">{error}</span>
      }
    </div>
  </>
);

AreaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
