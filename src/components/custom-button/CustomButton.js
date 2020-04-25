import React from "react";
import "./custombutton.css";

const CustomButton = ({
  children,
  isGoogleSignIn,
  //inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""}  
    custom-button`}
    {...otherProps}
  >
    {children}
  </button>
  /*  <button
    className={`
     ${inverted ? "inverted" : ""}} {${
      isGoogleSignIn ? "google-sign-in" : ""
    }  
    custom-button`}
    className="custom-button"
    {...otherProps}
  >
    {children}
  </button>  */
);

export default CustomButton;
