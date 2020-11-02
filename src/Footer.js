import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";
import Typography from "@material-ui/core/Typography";
const Footer = () => {
  const { width } = useWindowDimensions();
  const [contentClass, setContentClass] = useState("");
  const [inputClass, setInputClass] = useState("");
  useEffect(() => {
    if (width > 600) {
      setContentClass("content--wide");
      setInputClass("input--wide");
    } else {
      setContentClass("content--narrow");
      setInputClass("input--narrow");
    }
  }, [width]);

  return (
    <div className={inputClass}style={{ gridRowStart: "3", gridRowEnd: "4", width: "100%", textAlign:'center', padding:'1em' }}>
      <Typography  variant='body1'>Copyright Piotr Mrozowski {new Date().getFullYear()}</Typography> 
    </div>
  );
};

export default Footer;
