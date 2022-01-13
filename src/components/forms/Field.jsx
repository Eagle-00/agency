import React from "react";
import PropTypes from 'prop-types';

const style = {
  borderRadius: 0,
  fontSize: 14,
  boxShadow: 0,

};

export const Field = (
  {
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    error = ''
  }
) => (
  <>
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        style={style}
        type={type}
        name={name}
        className={`form-control${error && ' is-invalid'}`}
        id={name}
        placeholder={placeholder}
        value={value && value || ''}
        onChange={onChange}
        autoComplete='off'
      />
      {error &&
      <span className="invalid-feedback">{error}</span>
      }
    </div>
  </>
);

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
