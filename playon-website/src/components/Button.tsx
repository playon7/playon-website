import React from "react";
import "./Button.css";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <a className={`btn custom-btn rounded-pill ${className}`} {...props}>
      {children}
    </a>
  );
};

export default Button;
