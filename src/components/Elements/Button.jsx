import React from "react";

const Button = ({ className, children }) => (
  <button
    className={className}
    style={{
      border: "none",
      borderRadius: "8px",
      color: "#FFFFFF",
      cursor: "pointer",
      fontSize: "14px",
    }}
  >
    {children}
  </button>
);

export default Button;
