import React from "react";

export const NewsletterField = ({value, onChange}) => (
  <>
    <input
      type='email'
      name='email'
      value={value}
      onChange={onChange}
    />
  </>
);
