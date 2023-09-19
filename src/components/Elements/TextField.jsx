import React from "react";

const TextField = ({ type, className='input', placeholder, style}) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    style={{ border: "1px solid #3D3549", borderRadius: "7px", padding: '1rem', background: 'transparent', ...style }}
  />
);

export default TextField;
