import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

const InfoScreen = () => {
  const { width } = useWindowDimensions();

  const [contentClass, setContentClass] = useState("");
  useEffect(() => {
    if (width > 600) {
      setContentClass("content--wide");
    } else {
      setContentClass("content--narrow");
    }
  }, [width]);

  return (
    <div className={contentClass}>
      <Typography variant="body1">
        This application is a project of mine aiming to showcase my skills as a
        web developer. As of now it only consists of the front-end, and that is
        where all the logic (calculations, state management etc.) is executed,
        as that is my main area of expertise. The back-end will be added
        eventually, it will be executed with the use of NodeJS/Express and
        MongoDB/Mongoose.
      </Typography>
      <br />

      <Typography variant="body1">
        The content of the application is not random – for a long time I have
        been passionate about physical exercise and general fitness. The
        formulas used for calculations are not of my own making, however I have
        tested them in practice over the course of several years.
      </Typography>
      <br />

      <Typography variant="body1">
        Often when browsing the web, I have been looking for a simple
        application that would allow me to do basic fitness-related calculations
        on the fly – BMR, calorie consumption, meal macronutrients etc. The
        results I came across left some to be desired, hence I decided to make
        my own application.
      </Typography>
    </div>
  );
};

export default InfoScreen;
