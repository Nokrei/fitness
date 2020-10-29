import React from "react";
import Typography from "@material-ui/core/Typography";
const Footer = () => {
  return (
    <div style={{ gridRowStart: "3", gridRowEnd: "4", width: "100%", textAlign:'center', padding:'1em' }}>
      <Typography variant='body1'>Copyright Piotr Mrozowski {new Date().getFullYear()}</Typography> 
    </div>
  );
};

export default Footer;
